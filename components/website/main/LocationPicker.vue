<template>
    <div class="location-picker overflow-hidden relative">
      <div class="map-container" ref="map"></div>
      <div v-if="hasSearch" class="search-container">
        <input
          type="text"
          placeholder="Search for a location"
          v-model="searchTerm"
          @keydown.enter="searchLocation"
        />
        <VBtn @click="searchLocation">Search</VBtn>
      </div>
      <!-- <div
        ref="coverage"
        :style="`
        left:${coverageX}px;
        top:${coverageY}px;
    
        `"
        v-if="withCoverageArea"
        class="z-10 absolute w-[300px] h-[300px] rounded-full bg-primary opacity-25"
      ></div> -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      hasSearch: {
        type: Boolean,
        default: false,
      },
      apiKey: {
        type: String,
        required: true,
      },
      defaultLocation: {
        type: Object,
        default: () => ({ lat: 24.730023000000028, lng: 46.67038300000002 }),
      },
      zoom: {
        type: Number,
        default: 10,
      },
      withCoverageArea: {
        type: Boolean,
        default: false,
      },
      coverageArea: {
        type: Number,
        default: 10,
      },
    },
    data() {
      return {
        map: null,
        marker: null,
        searchTerm: "",
        coverage: null,
        coverageX: 0,
        coverageY: 0,
        coverageAreaCircle: null,
      };
    },
    mounted() {
      this.loadMap();
    },
    methods: {
      loadMap() {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=initMap`;
        window.initMap = this.initMap;
        document.head.appendChild(script);
      },
      initMap() {
        this.map = new google.maps.Map(this.$refs.map, {
          center: this.defaultLocation,
          zoom: this.zoom,
        });
        this.coverageAreaCircle = new google.maps.Circle({
          center: this.defaultLocation,
          radius: this.coverageArea * 1000,
          strokeColor: "#FF9E59",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF9E59",
          fillOpacity: 0.35,
        });
        this.coverageAreaCircle.setMap(this.map);
  
        this.marker = new google.maps.Marker({
          position: this.defaultLocation,
          map: this.map,
        });
  
        document.querySelector(".location-picker").add;
        this.map.addListener("click", (event) => {
          this.marker.setPosition(event.latLng);
          console.log(this.marker);
          // console.log(event);
          // document.querySelector("#coverage-area")?.sceenX = event.Va.x;
          // console.log(event.Va);
          const selectedMarker = document.querySelector(".map-container img");
  
          this.$emit("location-selected", event.latLng.toJSON());
        });
      },
  
      searchLocation() {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: this.searchTerm }, (results, status) => {
          if (status === "OK") {
            const location = results[0].geometry.location;
  
            this.map.setCenter(location);
            this.marker.setPosition(location);
            this.$emit("location-selected", location.toJSON());
          } else {
            console.error("Geocode was not successful for the following reason: " + status);
          }
        });
      },
    },
    watch: {
      coverageArea: (o, n) => {
        initMap();
        // this.coverageAreaCircle.setMap(this.map);
      },
    },
  };
  </script>
  
  <style>
  .location-picker {
    position: relative;
    height: 600px;
  }
  
  .map-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .search-container {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    display: flex;
  }
  
  .search-container input {
    width: 300px;
    margin-right: 10px;
  }
  
  .search-container VBtn {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  