export interface Product {
  id: number;
  name: string;
 flavors: { name: string; color:string; image: string; }[];
  sizes: string[];
  quantity:number
  price: number;
}
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Ice Cream',
    flavors: [
      {name: 'purne',color: '#4d79ff', image: 'images/blue icecream.jpg'},
      {name: 'squash',color: '#e95b19ff', image: 'images/orange-icecream.jpg'},
      {name:'cherry',color: '#80095cff', image:'images/cherry-icecream.webp'}
    ],
    sizes: ['Small', 'Medium', 'Large'],
    quantity:1,
    price: 100
  },
  {
    id: 2,
    name: 'Popsicle',
    flavors: [
      {name: 'lime', color: '#4d79ff',image: 'images/popsicle-lightblue.jpg'},
      {name: 'lettuce',color: '#1bc933ff', image: 'images/popsicle-lightgreen.jpg'},
      {name:'cherry',color: '#f16ad4ff', image:'images/cherry-ice.jpg'}
    ],
    sizes: ['Small', 'Medium', 'Large'],
    quantity:1,
    price: 80
  }
];
