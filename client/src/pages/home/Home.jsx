import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import CategoryList from "../../components/category-list/CategoryList";
import MenuPosts from "../../components/menu-posts/MenuPosts";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div>
      <CategoryList/>
      </div>
      <div className="title">
     <h1> Featured Posts</h1>
    </div>
      <div className="home">
        <Posts posts={posts} />
        {/* <Sidebar /> */}
        <MenuPosts />
      </div>
      <div>

      <Footer />
      </div>
    </>
  );
}
