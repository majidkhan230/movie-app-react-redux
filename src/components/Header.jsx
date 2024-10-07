import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  const [searchInput,setSearchInput] = useState("");
  const nav = useNavigate()
  
  const navigation = [
    {
      label: "TV shows",
      href: "tv",
    },
    {
      label: "Movies",
      href: "movies",
    },
  ];
  
// console.log(searchInput)

useEffect(()=>{
  nav(`/search?q=${searchInput}`)
},[searchInput])

const handleSubmit = (e)=>{
  e.preventDefault();
}

  return (
    <header className="top-0 fixed w-full h-16 bg-opacity-75 bg-neutral-700">
      <div className="container mx-auto p-2 flex items-center  overflow-hidden">
        <Link to={"/"}>
        <img
          src="/assets/images/logo.png"
          alt=""
          className="w-10 h-10  rounded-full"
        />
        </Link>
       <nav className="hidden lg:flex gap-2 ml-4">
       {navigation.map((item, index) => {
          return (
            <div  key={index} >
              <NavLink to={item.href} className={({isActive})=>`p-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                {item.label}
              </NavLink>
            </div>
          );
        })}
       </nav>

       <div className="ml-auto ">
       <form onSubmit={handleSubmit} className="flex items-center">
       <input onChange={(e)=>{
        setSearchInput(e.target.value)
       }} value={searchInput} type="search" className="hidden lg:block outline-none border-none px-4 py-2 bg-transparent" placeholder="Search here...." />
      <button> <IoIosSearch size={30} /></button>
       </form>
       </div>
      </div>
    </header>
  );
};

export default Header;
