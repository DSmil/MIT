import React, { useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { categories } from 'utils/data'
import { motion } from "framer-motion"
import { RowContainer } from "components/index"
import { useStateValue } from 'context/StateProvider'
import "./style.css"
//import {CustomClass} from "./style.js"

function MenuContainer() {

    const [filter, setfilter] = useState("chicken")

    const [{ acceptedDevices }, dispatch] = useStateValue()

    const baseClassName = 'w-10 h-10 rounded-full shadow-lg flex items-center justify-center';
    const activeClassName = 'bg-white';
    const inactiveClassName = 'bg-cartNumBg';

    return (
      <section className="sectionn" id="menu">
        <div className="outerLayer">
          <p className="makes"> Our Categories
          </p>
  
          <div className="scrolli">
            {categories &&
              categories.map((category) => (
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  key={category.id}
                  className="custom-class"
                  onClick={() => setfilter(category.urlParamName)}
                >
                  <div
                    className={`${baseClassName} ${filter === category.urlParamName ? activeClassName : inactiveClassName} group-hover:bg-white`}
                  >
                    <IoFastFood
                      className={`${
                        filter === category.urlParamName
                          ? "text-textColor"
                          : "text-white"
                      } group-hover:text-textColor text-lg`}
                    />
                  </div>
                  <p
                    className={`text-sm ${
                      filter === category.urlParamName
                        ? "text-white"
                        : "text-textColor"
                    } group-hover:text-white`}
                  >
                    {category.name}
                  </p>
                </motion.div>
              ))}
          </div>
  
          <div className="sectionn">
            <RowContainer
              flag={false}
              data={acceptedDevices?.filter((n) => n.category === filter)}
            />
          </div>
        </div>
      </section>
    )
}

export default MenuContainer