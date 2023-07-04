<template>

 
        <!-- Loader Start -->
        <!-- <div id="preloader">-->
        <!--    <div id="status">-->
        <!--        <div class="spinner">-->
        <!--            <div class="double-bounce1"></div>-->
        <!--            <div class="double-bounce2"></div>-->
        <!--        </div>-->
        <!--    </div>-->
        <!--</div> -->
        <!-- Loader End -->
        
        <!-- Start Navbar -->
       =
        <section class="swiper-slider-hero relative block h-screen" id="home">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide flex items-center overflow-hidden">
                        <div class="slide-inner slide-bg-image flex items-center bg-cover bg-no-repeat;" data-background="public/home/1.jpg">
                            <div class="absolute inset-0 bg-black/70"></div>
                            <div class="container">
                                <div class="grid grid-cols-1">
                                    <div class="text-center">
                                        <h1 class="font-semibold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Share Anything <br><span data-period="2000" data-type='["Cameras", "Scooters", "Tools", "Clothes", "Watches"]' class="typewrite"><span class="text-indigo-800"></span></span></h1>
                                        <p class="text-white/70 text-lg max-w-xl mx-auto">Share Almost anything. In a Click of a VBtn</p>
                                        <div class="mt-6">
                                            <a href="https://apps.apple.com/us/app/yjoz/id1638068042"><img src="public/home/app.png" class="inline-block m-1" alt=""></a>
                                            <a href="https://play.google.com/store/apps/details?id=com.lootah.yjoz"><img src="public/home/playstore.png" class="inline-block m-1" alt=""></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide flex items-center overflow-hidden">
                        <div class="slide-inner slide-bg-image flex items-center bg-cover bg-no-repeat" data-background="public/home/slider2.jpg">
                            <div class="absolute inset-0 bg-black/70"></div>
                            <div class="container">
                                <div class="grid grid-cols-1">
                                    <div class="text-center">
                                        <h1 class="font-semibold text-white lg:leadifng-normal leading-normal text-4xl lg:text-5xl mb-5">Alternative Life  <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-600 relative inline-block"><span class="relative text-white">Style</span></span></h1>
                                        <p class="text-white/70 text-lg max-w-xl mx-auto">
                                            We provide more than online sharing / renting services, we help you explore a world of possibilities. <br>
                                            <span class="font-bold">“Progress is impossible without change, and those who cannot change their minds cannot change anything.”</span> <br>
                                            <span class="font-bold after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-gray-600">- George Bernard Shaw</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide flex items-center overflow-hidden">
                        <div class="slide-inner slide-bg-image flex items-center bg-cover bg-no-repeat" data-background="public/home/slider3.jpg">
                            <div class="absolute inset-0 bg-black/70"></div>
                            <div class="container">
                                <div class="grid grid-cols-1">
                                    <div class="text-center">
  
                                        <p class="text-white/70 text-lg max-w-xl mx-auto">
                                            We share the planet, why we don’t share our stuff. <br>
                                            <span class="font-bold">“I only feel angry when I see waste. When I see people throwing away things we could use.”</span> <br>
                                            <span class="font-bold after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-gray-600">— Mother Teresa</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-VBtn-next rounded-full text-center text-gray-200 uil uil-angle-right-b me-1"></div>
                <div class="swiper-VBtn-prev rounded-full text-center text-gray-200"></div>
            </div>
        </section>
        
        <section class="relative py-16 bg-gray-100 dark:bg-slate-800">
            <div class="container">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div class="flex">
                        <div class="flex align-middle justify-center items-center min-w-[56px] h-[56px] border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
                            <img class="h-6" src="public/home/access_more.png" alt="">
                        </div>

                        <div class="content ml-6">
                            <a href="#" class="text-lg font-medium hover:text-indigo-600">Access More</a>
                            <p class="text-slate-400 mt-3">Get Things Done</p>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="flex align-middle justify-center items-center min-w-[56px] h-[56px] border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
                            <img class="h-6" src="public/home/save_money.png" alt="">
                        </div>

                        <div class="content ml-6">
                            <a href="#" class="text-lg font-medium hover:text-indigo-600">Save Money</a>
                            <p class="text-slate-400 mt-3">Buy Less share more</p>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="flex align-middle justify-center items-center min-w-[56px] h-[56px] border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
                            <img class="h-6" src="public/home/help_planet.png" alt="">
                        </div>

                        <div class="content ml-6">
                            <a href="#" class="text-lg font-medium hover:text-indigo-600">Help the planet</a>
                            <p class="text-slate-400 mt-3">Reduce waste</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container md:mt-24 mt-16 px-12 md:px-0" id="about">
            <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div>
                    <div class="relative">
                        <img src="public/logo/logo_white_background.jpg" class="mx-6 h-24" alt="">
                    </div>
                </div>
                <div>
                    <div class="lg:ml-4">
                        <h4 class="w-48 text-indigo-600 font-semibold mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative">Who we are ?</h4>
                        <p class="text-slate-400 max-w-xl">
                            An innovative sharing / renting platform where we share products of the people . The Senders who share their products in <span class="text-indigo-600 mb-6 font-bold leading-normal after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative">YJOZ</span> get paid from it and Receivers who can use the products and can return at any time with minimal fees.
                            We provide more than online sharing /renting services, we help you explore a world of possibilities. With our assured quality and prompt services, you can say goodbye to all the hassles that come with buying new products and say hello to convenience. <br>
                            We at <span class="text-indigo-600 mb-6 font-bold leading-normal after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative">YJOZ</span>  believe that sharing is caring and when people share their things to others in need , we make a statement of how we care about wastage and saving the environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>

       <section class="bg-gray-100 py-12 mt-32" id="addProduct">
            <div class="container md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                    <div class="relative">
                        <img src="public/mobile1.png" class="mx-auto h-86" alt="">
                                                

                        
                    </div>

                    <div class="lg:ml-8">
                        <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Start Shopping on <span class="text-indigo-600 mb-6 font-bold leading-normal after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative">YJOZ</span></h4>
                        <p class="text-slate-400">
                            <ul>
                                <li>Access items without owning them by getting them from Yjoz.</li>
                                <li>With a few clicks get your desired product delivered at your door step.</li>
                            </ul>
                        </p>
                        <a href="#howToAdd" class="mt-2 btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Show me how!</a>
                    </div>
                </div>
            </div>

            <div class="container md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative order-1 md:order-2">
                        <img src="public/mobile2.png" class="mx-auto" alt="">
                      
                    </div>

                    <div class="lg:mr-8 order-2 md:order-1">
                        <div class="lg:ml-8">
                            <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Start Earning on <span class="text-indigo-600 mb-6 font-bold leading-normal after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative">YJOZ</span></h4>
                            <p class="text-slate-400">
                                <ul>
                                    <li>Make money by sharing / renting your stuff.</li>
                                    <li>We’ve got you covered.</li>
                                    <li>We take safety seriously, every product in our marketplace gets verified by professional Team and if things went wrong we guarantee your rights.</li>
                                </ul>
                            </p>
                            <a href="#howToShare" class="mt-2 btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Show me how!</a>
                        </div>
                    </div>
                </div>
            </div>
       </section>

        <section class="py-20 w-full table relative bg-no-repeat bg-cover" data-jarallax='{"speed": 0.5}' style="background: url('https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80')">
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl text-2xl text-white font-medium">We’d <span class="text-indigo-600 mb-6 font-bold after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative">love</span> to hear from you!!</h3>

                    <p class="text-white/80 max-w-xl mx-auto">
                        Whether you’re curious about features payments and process. <br>
                        — we’re ready to answer any and all your questions.
                    </p>
                
                    <div class="relative mt-8">
                        <a href="#contactModal" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="howToAdd">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">How to start</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Getting <span class="after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">started</span></h3>
                </div>

                <div class="grid grid-cols-1 mt-8">
                    <div class="relative after:content-[''] after:absolute after:top-0 md:after:right-0 md:after:left-0 after:w-px after:h-full md:after:m-auto after:border-l-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ml-3 md:ml-0">
                        <div class="ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div class="grid md:grid-cols-2">
                                <div class="md:text-right md:mr-8 relative">
                                    <img src="public/home/find.png" class="h-9 w-9 md:ml-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Step 1</h5>
                                </div>

                                <div class="float-left text-left md:ml-8 mt-6 md:mt-0">
                                    <h5 class="title mb-1 font-semibold">Find an item.</h5>
                                    <p class="mt-3 mb-0 text-slate-400">
                                             Finding an item on <span class="font-bold after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">Yjoz</span> is easy as we provide you various drop-down menu and filters to choose from. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div class="grid md:grid-cols-2">
                                <div class="text-left md:ml-8 relative md:order-2">
                                    <img src="public/home/order.png" class="h-9 w-9 md:mr-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Step 2</h5>
                                </div>

                                <div class="float-left md:text-right md:mr-8 mt-6 md:mt-0 md:order-1">
                                    <h5 class="title mb-1 font-semibold">Place an order</h5>
                                    <p class="mt-3 mb-0 text-slate-400">
                                      You can select a product of your choice, with the subscription that you prefer. Key in your delivery address and complete it with your favourite payment mode.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div class="grid md:grid-cols-2">
                                <div class="md:text-right md:mr-8 relative">
                                    <img src="public/home/fast-delivery.png" class="h-9 w-9 md:ml-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Step 3</h5>
                                </div>

                                <div class="float-left text-left md:ml-8 mt-6 md:mt-0">
                                    <h5 class="title mb-1 font-semibold">Get it Delivered to your place.</h5>
                                    <p class="mt-3 mb-0 text-slate-400">
                                         Our logistics team will ensure that you get your product at your door step in the fastest means.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container">
                <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5">
                        <div class="lg:text-left text-center">
                            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-600 relative inline-block">
                                    <span class="relative text-white">
                                        Playing your part
                                    </span>
                                </span>
                            </h3>
                            <p class="text-slate-400 max-w-xl mx-auto">
                                Sharing / Renting on <span class="after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">Yjoz</span> isn’t just convenient and cost effective. But
                                by buying less and sharing / renting more you’re also contributing to a circular economy, making better use of resources and helping to protect this wonderful planet we live on.
                            </p>
                        </div>
                    </div>

                    <div class="lg:col-span-7 mt-8 lg:mt-0">
                        <!--<img src="public/home/save-the-earth-animate.svg" alt="">-->
                                      </div><!--end col-->
                </div><!--end grid-->
            </div><!--end container-->
        </section>

        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="howToShare">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Share Almost anything <br> In a Click of a VBtn</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Start <span class="after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">Sharing</span></h3>
                </div>

                <div class="grid grid-cols-1 mt-8">
                    <div class="relative after:content-[''] after:absolute after:top-0 md:after:right-0 md:after:left-0 after:w-px after:h-full md:after:m-auto after:border-l-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ml-3 md:ml-0">
                        <div class="ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div class="grid md:grid-cols-2">
                                <div class="md:text-right md:mr-8 relative">
                                    <img src="public/home/idea.png" class="h-9 w-9 md:ml-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Step 1</h5>
                                </div>

                                <div class="float-left text-left md:ml-8 mt-6 md:mt-0">
                                    <h5 class="title mb-1 font-semibold">Think of all the great things you have</h5>
                                    <p class="mt-3 mb-0 text-slate-400">
                                    Let it be any item that you can think of like phones, tools, electronics, clothing, furniture and any other stuff in your home.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div class="grid md:grid-cols-2">
                                <div class="text-left md:ml-8 relative md:order-2">
                                    <img src="public/home/camera.png" class="h-9 w-9 md:mr-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Step 2</h5>
                                </div>

                                <div class="float-left md:text-right md:mr-8 mt-6 md:mt-0 md:order-1">
                                    <h5 class="title mb-1 font-semibold">Take photos and set a price</h5>
                                    <p class="mt-3 mb-0 text-slate-400">
                                           Upload pics that describe your product the best and set a price of your choice.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div class="grid md:grid-cols-2">
                                <div class="md:text-right md:mr-8 relative">
                                    <img src="public/home/upload.png" class="h-9 w-9 md:ml-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Step 3</h5>
                                </div>

                                <div class="float-left text-left md:ml-8 mt-6 md:mt-0">
                                    <h5 class="title mb-1 font-semibold">Send your request to add the product</h5>
                                    <p class="mt-3 mb-0 text-slate-400">
                                       Add in your details with relevant info and send it to us. Sit back and relax while we do the rest for you. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contactModal" class="min-h-screen bg-cover" style="background-image: url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
            <div class="flex flex-col min-h-screen bg-black/60">
                <div class="container flex flex-col flex-1 px-4 py-12">
                    <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                        <div class="text-white lg:w-1/2 lg:mx-6">
                            <h1 class="text-3xl font-semibold capitalize lg:text-5xl">Contact us</h1>
        
                            <p class="max-w-xl mt-6">
                                Please get in touch and our experts will answer all your questions.
                            </p>
                        </div>
        
                          <div class="md:flex justify-center mx-4 py-4 md:py-0 md:mx-0">
                            <div class="max-w-[400px] w-full bg-white rounded-md shadow-xl dark:shadow-gray-800 px-6 py-8">
                                <a href="index.html"><img src="public/assets/images/logo-icon-64.png" class="mx-auto" alt=""></a>
                                <h3 class="my-6 text-2xl leading-normal font-medium text-center">Get in touch !</h3>
    
                                <form class="mb-0" id="template-contactform" name="template-contactform" action="https://yjoz.io/form" method="post">
                                    <input type="hidden" name="_token" value="luYWiC1g5IzGFsanuOAduH47GtfVSxAkPwePOanA">                                    <div class="grid lg:grid-cols-12 lg:gap-6">
                                        <div class="lg:col-span-6 mb-5">
                                            <div class="text-left">
                                                <label for="email" class="font-semibold">First Name:</label>
                                                <div class="form-icon relative mt-2 w-full">
                                                    <i data-feather="name" class="w-4 h-4 absolute top-3 left-4"></i>
                                                    <input name="template-contactform-name" id="text" type="text" class="form-input pl-11" placeholder="First Name :">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lg:col-span-6 mb-5">
                                            <div class="text-left">
                                                <label for="email" class="font-semibold">Last Name:</label>
                                                <div class="form-icon relative mt-2 w-full">
                                                    <i data-feather="name" class="w-4 h-4 absolute top-3 left-4"></i>
                                                    <input name="last_name" id="text" type="text" class="form-input pl-11" placeholder="Last Name :">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   <div class="lg:col-span-6 mb-5">
                                            <div class="text-left">
                                                <label for="email" class="font-semibold">Email :</label>
                                                <div class="form-icon relative mt-2 w-full">
                                                    <i data-feather="mail" class="w-4 h-4 absolute top-3 left-4"></i>
                                                    <input name="template-contactform-email" id="text" type="email" class="form-input pl-11" placeholder="Email :">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="mb-5">
                                            <div class="text-left">
                                                <label for="subject" class="font-semibold">Your Message:</label>
                                                <div class="form-icon relative mt-2">
                                                    <i data-feather="book" class="w-4 h-4 absolute top-3 left-4"></i>
                                                     <textarea name="template_contactform_message" id="message" class="form-input pl-11 h-28" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        
                                         <div class="mb-5" style="padding-right: 50%">
                                            <div class="text-left">
                                                <div class="mt-2 g-recaptcha" data-sitekey="6LcyzhIiAAAAAE6pPi3Pu3W1vgvdt7fyyvFOmg7q"></div>
                                                <input type="hidden" name="prefix" value="template-contactform-">
                                            </div>
                                        </div>
                                    
                                    <div class="px-8">
                                        
                                        <div class="cf-right-col">
                                            
                                            <!-- Send VBtn -->
                                            <div class="align-right pt-10 mt-4">
                                                <VBtn class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md" id="submit_btn" aria-controls="result">Send</VBtn>
                                            </div>
                                            
                                            <div class="col-12 form-group mb-4 d-none">
                                                <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="rounded-pill form-control" />
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    
                                    <div id="result" role="region" aria-live="polite" aria-atomic="true"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


</template>