var initialSate=[
    {
     id:1,
     name: 'I phone 6 plus',
     image:'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/9/11/637037652462548298_11-trang.png',
     description:"san pham do apple san xuat",
     price:400,
     inventory:15,
     rating:3

},
{
    id:2,
    name: 'I phone 7 plus',
    image:'https://hc.com.vn/i/ecommerce/media/GS.006085_FEATURE_71021.jpg',
    description:"san pham do apple san xuat",
    price:500,
    inventory:16,
    rating:4

},
{
    id:3,
    name: 'I phone 8 plus',
    image:'https://hc.com.vn/i/ecommerce/media/GS.006049_FEATURE_70846.jpg',   
    description:"san pham do apple san xuat",
    price:600,
    inventory:1,
    rating:5

},

];

const products=(state=initialSate,action)=>{
   switch (action.type) {
       default: return [...state];
   }
}
export default products;