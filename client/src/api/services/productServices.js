import { http } from "../../common/http";


export const getProducts2 = async () => {
  const response = await http.get('/api/products')
  return response.data;
}
    
export const getProducts = () => [
    {
      id: 1,
      name: 'Gaming Laptop',
      price: 1500,
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/CO/NL/LE/150885575/asus-rog-zephyrus-duo-gaming-laptop-15-6-uhd-4k-gsync-secondary-display-core-i9-10980hk-nvidia.jpg',
      categories: ['Laptops', 'Gaming'],
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 50,
      image: 'https://m.media-amazon.com/images/I/51sTLdrBAPL._AC_UF1000,1000_QL80_.jpg',
      categories: ['Accessories', 'Peripherals'],
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      price: 100,
      image: 'https://media.wired.com/photos/65b0438c22aa647640de5c75/master/pass/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg',
      categories: ['Accessories', 'Peripherals'],
    },
    {
      id: 4,
      name: 'External Hard Drive',
      price: 120,
      image: 'https://media.istockphoto.com/id/1179440938/photo/external-hdd.jpg?s=612x612&w=0&k=20&c=c_K1di-Bk_5_ryn6WAQX7zIS3FrXGpXf9EnF7TpicmI=',
      categories: ['Storage', 'Accessories'],
    },
    {
      id: 5,
      name: 'Graphics Card',
      price: 500,
      image: 'https://media.istockphoto.com/id/1180632542/photo/game-graphics-card-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=85BqNJYAFfvqszuMYUhGmLyS7PEOlnge2B-pvy0SUBk=',
      categories: ['Components', 'Gaming'],
    },
    {
      id: 6,
      name: 'Portable SSD',
      price: 200,
      image: 'https://media.istockphoto.com/id/1166998074/photo/portable-ssd-state-solid-drives-disk-in-womans-hands-against-notebook-keyboard.jpg?s=612x612&w=0&k=20&c=N77eyVS7wLGm9fIvK92GHQupkFYv-wFeSnadKETHADw=',
      categories: ['Storage', 'Accessories'],
    },
    {
      id: 7,
      name: 'Gaming Monitor',
      price: 300,
      image: 'https://images.samsung.com/is/image/samsung/assets/nz/members/article-assets/gaming-monitors/img-kv-2.jpg?$ORIGIN_JPG$',
      categories: ['Monitors', 'Gaming'],
    },
    {
      id: 8,
      name: 'All-in-One Printer',
      price: 150,
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      categories: ['Peripherals', 'Printers'],
    },
  ];
