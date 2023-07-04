export class Product {
  id: string='';
  owner: Owner= new Owner();
  title: string='';
  description: string='';
  link: string='';
  stripe_product_id?: any;
  verified: string='';
  status: string='';
  min_rental_days: number=0;
  prices: Prices = new Prices();
  category: Category=new Category();
  images: string[]=[];
  images_to_update: Imagestoupdate[]=[];
  tag: Tag= new Tag();
  num_of_clicks: number=0;
  favorite: boolean=false;
  rental_count: number=0;
  earnings_count: number=0;
  favourites_count: number=0;
  questions_count: number=0;
  questions: any[]=[];
  created_at: string='';
  updated_at: string='';
  address: Address= new Address;
  quantity: number=0;
  rate?: any;
  is_editable: boolean=false;
}

class Tag {
  id: string='';
  tag: string='';
  color: string='';
  font_color: string='';
}

class Imagestoupdate {
  id: string='';
  image: string='';
}

class Category {
  id: string='';
  category: string='';
  image: string='';
  created_at: string='';
  updated_at: string='';
  sub_categories: Subcategory[]=[];
}

class Subcategory {
  id: string='';
  category: string='';
  image: string='';
  created_at: string='';
  updated_at: string='';
}

class Prices {
  day_price: number=0;
  week_price: number=0;
  month_price: number=0;
  item_price: number=0;
}

class Owner {
  id: string='';
  public_id: string='';
  first_name: string='';
  last_name: string='';
  email?: any;
  country_code?: any;
  phone_number:number =0;
  about_me?: any;
  image?: any;
  cover_image?: any;
  address: Address= new Address();
  rating: number=0;
  rating_count: number=0;
  link?: any;
  id_verified: string='';
}

class Address {
  id: string='';
  city: string='';
  label: string='';
  address: string='';
  latitude: string='';
  longitude: string='';
  contact_user_name?: any;
  contact_user_number:number=0;
  street: string='';
  building_name: string='';
  flat_no: string='';
  is_default: boolean=false;
  map_preview: string='';
  is_location_fetched: boolean=false;
  created_at: string='';
  updated_at: string='';
}