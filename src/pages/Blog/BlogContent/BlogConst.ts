interface BlogItem {
  imageSrc: string;
  title: string;
  description: string;
  img_w?: number;
  img_h?: number;
  github?: string;
}

const blogConst: BlogItem[] = [
  {
    imageSrc:
      "https://scaler.com/topics/images/object-oriented-programming-concepts-1024x870.jpg",
    title: `<strong class="orange_gradient">OOP concepts</strong>`,
    description: `In this article, I explained the 4 pillars in OOP which they are Abstraction, Inheritance, Encapsulation, Polymorphism.</br>
    In OOP, we bring together the data and methods that operate on it in a single Object.</br>
    OOP programming paradigm is often a better choice for creating graphical user interfaces and games.</br>
    <strong class="blue_gradient">Benfits of OOP</strong> 
    <ul>
     <li><strong>Reduces complexity:</strong> by breaking down a large complex application into smaller, more manageable and easier to maintain objects</li>
     <li><strong>Easier Maintenance:</strong> Every part can work together and fix independently</li>
     <li><strong>Reduces complexity:</strong> Create templets</li>
     <li><strong>Reduces complexity:</strong> Less time building applications</li>
    </ul>
    `,
    img_w: 10,
    img_h: 20,
    github: ""
  },
  { imageSrc: "logo.png", title: "Title 1", description: "Description 1" },
  { imageSrc: "logo.png", title: "Title 1", description: "Description 1" },
  { imageSrc: "logo.png", title: "Title 1", description: "Description 1" }
];

export default blogConst;
