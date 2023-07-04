export class MainCategory {
  id: string='';
  category: string='';
  image: string='';
  created_at: string='';
  updated_at: string='';
  sub_categories: Subcategory[]=[];
}

export class Subcategory {
  id: string='';
  category: string='';
  image: string='';
  created_at: string='';
  updated_at: string='';
}