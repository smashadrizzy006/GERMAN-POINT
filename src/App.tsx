import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">German Point</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to German Point</h2>
        <p className="text-xl mb-8">Experience the finest German cuisine in town</p>
        <a href="#menu" className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">View Menu</a>
      </div>
    </section>
  );
};

const MenuItem: React.FC<{ title: string; description: string; price: string }> = ({ title, description, price }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-800 font-bold">{price}</p>
    </motion.div>
  );
};

const MenuSection: React.FC = () => {
  const menuCategories = [
    {
      name: "German Specialties",
      items: [
        { title: "Breakfast", description: "Bacon, Eggs, Sausages, Beans & Toast", price: "900Ksh" },
        { title: "Tomato Soup", description: "Classic tomato soup", price: "600 Ksh" },
        { title: "Beef Goulash", description: "Served with baguette slices", price: "600 Ksh" },
        { title: "German Sausage", description: "Bockwurst, Bratwurst, Bavarian Weisswurst", price: "1200 Ksh each" },
        { title: "Grilled Chicken", description: "Quarter Chicken, Half Chicken, or Full Chicken", price: "650-1200 Ksh" },
        { title: "Chicken Burger with Cheese", description: "Garnished with sautéed onions and tomato", price: "850 Ksh" },
        { title: "Grilled Steaks", description: "Cooked to your order (300-400 g)", price: "1500-1850 Ksh" },
        { title: "Beef Burger with Cheese", description: "Garnished with sauté onions and tomato", price: "800 Ksh" },
        { title: "Fish & Chips", description: "Traditional British Fish & Chips (fresh fillet in crispy batter)", price: "1300Ksh" },
        { title: "Grilled Prawns", description: "Plain, Pili Pili or Garlic", price: "1700 Ksh" },
        { title: "Calamari", description: "Grilled or deep fried", price: "950 Ksh" },
        { title: "Grilled Tilapia Fillet", description: "Lemon or spicy", price: "1350 Ksh" },
        { title: "Lamb Chops", description: "Served with your choice of roast or mashed potatoes, vegetables & gravy", price: "1150 Ksh" },
        { title: "Wiener Schnitzel", description: "Served with your choice of fries, potato or green salad & tartar sauce", price: "1300 Ksh" },
        { title: "Hunter Style Schnitzel", description: "Topped with mushroom sauce, served with your choice of fries or mashed potato", price: "1300 Ksh" },
        { title: "Pork Chops", description: "Served with your choice of mashed or roast potatoes, veg & gravy", price: "1250 Ksh" },
        { title: "Spaghetti Bolognaise", description: "With Parmesan cheese", price: "750 Ksh" },
        { title: "Spaghetti Diablo", description: "With olive oil, garlic, fresh chilies & Parmesan cheese", price: "650 Ksh" },
      ]
    },
    {
      name: "Indian Delights",
      items: [
        { title: "Murg Malai Wrap", description: "Chicken Tikka Masala wrap", price: "1050Ksh" },
        { title: "Paneer Tikka Wrap", description: "Vegetarian wrap", price: "950 Ksh" },
        { title: "Paneer Tikka", description: "Tandoored Cottage Cheese Cubes marinated in spices", price: "1150 Ksh" },
        { title: "Palak Paneer", description: "Paneer in a spicy, rich tomato, butter and cream gravy", price: "1150 Ksh" },
        { title: "Dry Chili Garlic Paneer", description: "Cubes of cottage cheese with ground spinach and spices", price: "1150 Ksh" },
        { title: "Dahl Makhani", description: "Black lentils cooked in spicy creamy sauce", price: "1150 Ksh" },
        { title: "Butter Chicken", description: "Chicken Breast Cubes in spicy, rich tomato, butter and cream gravy", price: "1250 Ksh" },
        { title: "Chicken Tikka Masala", description: "Tandoored Chicken Breast Cubes in spicy masala gravy", price: "1250 Ksh" },
        { title: "Chicken Vindaloo", description: "Chicken Breast Cubes in hot tangy vindaloo gravy", price: "1250 Ksh" },
        { title: "Chicken Korma", description: "Chicken Breast Cubes cooked with spices, garlic, chili, tomato and onion", price: "1250 Ksh" },
        { title: "Chicken Tika Boneless", description: "Marinated BBQ Chicken", price: "1200 Khs" },
        { title: "Tandoori Chicken on the Bone", description: "20-30 MINS", price: "1200 Khs" },
        { title: "Full 1200 Khs", description: "Full portion of Tandoori Chicken", price: "1200 Khs" },
        { title: "Shish Kabab", description: "Grilled meat skewers", price: "1150 Khs" },
        { title: "Chooza Chicken", description: "Grilled chicken dish", price: "1800 Khs" },
        { title: "Paneer Tika", description: "Grilled cottage cheese", price: "1050 Khs" },
        { title: "Tandoori Vegetable Seek", description: "Grilled vegetable skewers", price: "800 Khs" },
        { title: "Mutton Tikka Masala", description: "Mutton in spicy masala sauce", price: "1150 Khs" },
        { title: "Mutton Vindaloo", description: "Mutton in hot spicy vindaloo sauce", price: "1150 Khs" },
        { title: "Keema Mattar", description: "Minced mutton with peas", price: "1150 Khs" },
        { title: "Coconut Cream Mutton", description: "Mutton in coconut cream sauce", price: "1150 Khs" },
        { title: "Fish Masala", description: "Fish in special masala gravy", price: "1300 Khs" },
        { title: "Dry Chili Garlic Fish", description: "Fish with chili and garlic", price: "1300 Khs" },
        { title: "Dry Chili Garlic Prawns", description: "Prawns with chili and garlic", price: "1650 Khs" },
        { title: "Coconut Cream Prawns", description: "Prawns in coconut cream sauce", price: "1650 Khs" },
        { title: "Plain Basmati Rice", description: "Steamed basmati rice", price: "300 Ksh" },
        { title: "Mutton Biryani", description: "Spiced rice with mutton", price: "950 Khs" },
        { title: "Chicken Biryani", description: "Spiced rice with chicken", price: "950 Khs" },
        { title: "Plain Naan / Roti", description: "Indian bread", price: "200 Khs" },
        { title: "Butter Naan", description: "Buttered Indian bread", price: "250 Khs" },
        { title: "Garlic Naan", description: "Garlic-flavored Indian bread", price: "250 Khs" },
        { title: "Cheese Naan", description: "Cheese-stuffed Indian bread", price: "300 Khs" },
      ]
    },
    {
      name: "Chinese Cuisine",
      items: [
        { title: "Fried Spring Rolls (Vegetables)", description: "4 pieces", price: "400" },
        { title: "Fried Dumplings (Vegetables)", description: "4 pieces", price: "400" },
        { title: "Steamed Dumplings (Vegetables)", description: "4 pieces", price: "400" },
        { title: "Fried Spring Rolls (Chicken)", description: "4 pieces", price: "400" },
        { title: "Fried Dumplings (Chicken, Pork or Prawn)", description: "4 pieces", price: "400" },
        { title: "Steamed Dumplings (Chicken, Pork or Prawn)", description: "4 pieces", price: "400" },
        { title: "Crispy Chicken Wings with Garlic & Chili", description: "Spicy chicken wings", price: "950" },
        { title: "Prawn Tempura", description: "6 pieces", price: "1450" },
        { title: "Deep-fried Pork Spare Ribs", description: "Crispy pork ribs", price: "1150" },
        { title: "Vegetable Soup", description: "Mixed vegetable soup", price: "400" },
        { title: "Wonton Soup", description: "Choice of vegetable, chicken, pork or prawn", price: "500" },
        { title: "Hot & Sour Vegetable/Chicken Soup", description: "Spicy and tangy soup", price: "500" },
        { title: "Chicken/pork/beef Noodle Soup", description: "Hearty noodle soup", price: "1250" },
        { title: "Shredded Beef with Chili Sauce", description: "Spicy beef dish", price: "1150" },
        { title: "Beef in Oyster Sauce", description: "Savory beef dish", price: "1150" },
        { title: "Beef in Black Bean Sauce", description: "Flavorful beef dish", price: "1150" },
        { title: "Beef with Green Pepper", description: "Stir-fried beef with peppers", price: "1150" },
        { title: "Dry Chili Beef", description: "Spicy dry beef dish", price: "1150" },
        { title: "Beef Chop Suey", description: "Mixed vegetable and beef stir-fry", price: "1150" },
        { title: "Beef Sizzler", description: "Sizzling beef platter", price: "1250" },
        { title: "Sweet & Sour Pork", description: "Classic Chinese pork dish", price: "1200" },
        { title: "Shredded Pork", description: "Stir-fried shredded pork", price: "1200" },
        { title: "Pork Sizzler", description: "Sizzling pork platter", price: "1300" },
      ]
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        {menuCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
            <div className="menu-grid">
              {category.items.map((item, itemIndex) => (
                <MenuItem key={itemIndex} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Restaurant interior" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-6">
              German Point has been serving authentic German cuisine since 1999. Our passion for quality ingredients and traditional recipes has made us a favorite among locals and tourists alike.
            </p>
            <p className="text-lg">
              We pride ourselves on our warm hospitality and cozy atmosphere, making every visit a memorable experience. Join us for a taste of Germany in the heart of our city!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="mr-4" />
                <span>123 Main Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-4" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-4" />
                <span>Mon-Sat: 11am-10pm, Sun: 12pm-9pm</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900"><Instagram /></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><Facebook /></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><Twitter /></a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 German Point. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <MenuSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;