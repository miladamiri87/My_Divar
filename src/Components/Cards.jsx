import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

import Card from "./Card";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  getCity,
  getAdvertiseCity,
  getAdvertiseCategory,
  getCategory,
  getBrands,
} from "../data/data";

export default function Cards() {
  let params = useParams();
  // console.log(params);
  let adves = getAdvertiseCity(params.city_name);
  // console.log(adves);
  let brands = getBrands();
  let category = getCategory();
  let filter_category = getAdvertiseCategory(
    params.name_category,
    params.city_name
  );
  let  [id , setId]=useState()
  let sendId =(x)=>{
    setId(x)
  }

  return (
    <>
      <div className="container_content_card_brand">
        <div className="container_cards">
          {adves
            .filter((card_filter) => {
              let city_name_filter = params.city_name;
              let category_name_filter = params.name_category;
              if (category_name_filter) {
                let title = card_filter.category;

                return title.startsWith(category_name_filter);
              }

              return true;
            })

            .map((e) => (
              <Card title={e.category} price={e.price} product={e.product} id={e.adv_id} key={e.adv_id}  />
            ))}
        </div>

        <div className="container_brand">
          {category.map((c) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
              to={c.name_category}
              key={c.id_category}
            >
              {c.name_category}
            </NavLink>
          ))}
        </div>

      </div>
      {/* <Outlet/> */}
    </>
  );
}
