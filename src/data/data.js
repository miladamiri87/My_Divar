let books=[
    {
        name: "عادتهای اتمی",
        price: 11000,
        author: "مریم محمدی",
        id:"01"
    },
    {
        name: "نگرش مثبت",
        price: 12000,
        author: "صاحب علیزاده",
        id:"02"
    },
    {
        name: "عادتهای خوب",
        price: 13000,
        author: "سپیده رنجبر",
        id:"03"
    },
    {
        name: "باشگاه پنج صبحی ها",
        price: 14000,
        author: "میرزای بخش",
        id:"04"
    },
    {
        name: "بخشش",
        price: 15000,
        author: "علی سمندری",
        id:"05"
    },
]


const city= [
    {
        "city_name":  "Mashhad",
        "city_id":"01"
    },
    {
        "city_name":  "Tehran",
        "city_id":"02"
    },
    {
        "city_name":  "Esfahan",
        "city_id":"03"
    },
    {
        "city_name":  "Shiraz",
        "city_id":"04"
    }

  
]

const adv_cities = [
    {
        "city":"Mashhad",
        "category":"car",
        "product":"Pride",
        "price":"200$",
        "adv_id":"01"

    },
    {
        "city":"Mashhad",
        "category":"car",
        "product":"Tiba",
        "price":"300$",
        "adv_id":"02"

    },
    {
        "city":"Mashhad",
        "category":"car",
        "product":"Benz",
        "price":"2000$",
        "adv_id":"03"

    },
    {
        "city":"Tehran",
        "category":"car",
        "product":"Benz",
        "price":"2500$",
        "adv_id":"04"

    },
    {
        "city":"Tehran",
        "category":"car",
        "product":"BMW",
        "price":"3500$",
        "adv_id":"05"

    },
    {
        "city":"Tehran",
        "category":"car",
        "product":"Samand",
        "price":"350$",
        "adv_id":"06"

    },
    {
        "city":"Esfahan",
        "category":"car",
        "product":"BMW",
        "price":"3600$",
        "adv_id":"07"

    },
    {
        "city":"Esfahan",
        "category":"car",
        "product":"Pegeout",
        "price":"340$",
        "adv_id":"08"

    },
    {
        "city":"Esfahan",
        "category":"car",
        "product":"Samand",
        "price":"340$",
        "adv_id":"09"

    },
    {
        "city":"Shiraz",
        "category":"car",
        "product":"Pars",
        "price":"3400$",
        "adv_id":"10"

    },
    {
        "city":"Shiraz",
        "category":"car",
        "product":"Jian",
        "price":"34000$",
        "adv_id":"11"

    },
    {
        "city":"Shiraz",
        "category":"car",
        "product":"Pride",
        "price":"310$",
        "adv_id":"12"

    },
    {
        "city":"Mashhad",
        "category":"house",
        "product":"apartment",
        "price":"3000$",
        "adv_id":"13"

    },
    {
        "city":"Mashhad",
        "category":"house",
        "product":"villa",
        "price":"3050$",
        "adv_id":"14"
        
    },
    {
        "city":"Mashhad",
        "category":"house",
        "product":"complex",
        "price":"3050$",
        "adv_id":"15"
        
    },
    {
        "city":"Mashhad",
        "category":"house",
        "product":"villa",
        "price":"3440$",
        "adv_id":"16"
        
    },
    {
        "city":"Mashhad",
        "category":"mobile",
        "product":"Pixel",
        "price":"350$",
        "adv_id":"17"
        
    },
    {
        "city":"Mashhad",
        "category":"mobile",
        "product":"Apple",
        "price":"2000$",
        "adv_id":"18"
        
    },
    {
        "city":"Mashhad",
        "category":"mobile",
        "product":"Apple",
        "price":"2500$",
        "adv_id":"19"
        
    },
    {
        "city":"Mashhad",
        "category":"mobile",
        "product":"Sumsong",
        "price":"1000$",
        "adv_id":"20"   
    },
    {
        "city":"Mashhad",
        "category":"computer",
        "product":"hp",
        "price":"3000$",
        "adv_id":"21"   
    },
    {
        "city":"Mashhad",
        "category":"computer",
        "product":"dell",
        "price":"3800$",
        "adv_id":"22"   
    },
    {
        "city":"Tehran",
        "category":"computer",
        "product":"dell",
        "price":"3670$",
        "adv_id":"23"   
    },
    {
        "city":"Tehran",
        "category":"computer",
        "product":"msi",
        "price":"3500$",
        "adv_id":"24"   
    },
    {
        "city":"Tehran",
        "category":"computer",
        "product":"msi",
        "price":"3900$",
        "adv_id":"24"   
    },
    {
        "city":"Tehran",
        "category":"mobile",
        "product":"LG",
        "price":"2900$",
        "adv_id":"25"   
    },
    {
        "city":"Tehran",
        "category":"mobile",
        "product":"apple",
        "price":"1100$",
        "adv_id":"26"   
    },
    {
        "city":"Tehran",
        "category":"house",
        "product":"apartment",
        "price":"3100$",
        "adv_id":"27"   
    },
    {
        "city":"Tehran",
        "category":"house",
        "product":"apartment",
        "price":"4000$",
        "adv_id":"28"   
    },
    {
        "city":"Tehran",
        "category":"house",
        "product":"complex",
        "price":"2000$",
        "adv_id":"29"   
    },
    {
        "city":"Tehran",
        "category":"house",
        "product":"villa",
        "price":"5000$",
        "adv_id":"30"   
    },
    {
        "city":"Esfahan",
        "category":"house",
        "product":"villa",
        "price":"5300$",
        "adv_id":"31"   
    },
    {
        "city":"Esfahan",
        "category":"house",
        "product":"villa",
        "price":"4300$",
        "adv_id":"32"   
    },
    {
        "city":"Esfahan",
        "category":"mobile",
        "product":"LG",
        "price":"1300$",
        "adv_id":"33"   
    },
    {
        "city":"Esfahan",
        "category":"mobile",
        "product":"LG",
        "price":"1700$",
        "adv_id":"34"   
    },
    {
        "city":"Esfahan",
        "category":"computer",
        "product":"msi",
        "price":"2700$",
        "adv_id":"35"   
    },
    {
        "city":"Esfahan",
        "category":"computer",
        "product":"msi",
        "price":"2900$",
        "adv_id":"36"   
    },
    
    {
        "city":"Esfahan",
        "category":"computer",
        "product":"msi",
        "price":"2300$",
        "adv_id":"37"   
    },
    
    {
        "city":"Esfahan",
        "category":"computer",
        "product":"hp",
        "price":"2780$",
        "adv_id":"38"   
    },
    
    {
        "city":"Esfahan",
        "category":"computer",
        "product":"hp",
        "price":"3100$",
        "adv_id":"39"   
    },
    {
        "city":"Shiraz",
        "category":"computer",
        "product":"hp",
        "price":"3160$",
        "adv_id":"40"   
    },
    {
        "city":"Shiraz",
        "category":"house",
        "product":"apartment",
        "price":"9000$",
        "adv_id":"41"   
    },
    
    
    
]

const category = [
    {
        "name_category":"car",
        "id_category":"01"
    },
    {
        "name_category":"house",
        "id_category":"02"
    },
    {
        "name_category":"mobile",
        "id_category":"03"
    },
    {
        "name_category":"computer",
        "id_category":"04"
    },
]

const brand = [
    {
        "category_related":"car",
        "name_brand":"Samand",
        "id_brand":"01"
    },
    {
        "category_related":"car",
        "name_brand":"BMW",
        "id_brand":"02"

    },
    {
        "category_related":"car",
        "name_brand":"Benz",
        "id_brand":"03"

    },
    {
        "category_related":"car",
        "name_brand":"Tiba",
        "id_brand":"04"

    },
    {
        "category_related":"car",
        "name_brand":"Pride",
        "id_brand":"05"

    },
    {
        "category_related":"car",
        "name_brand":"Pegeout",
        "id_brand":"06"

    },
    {
        "category_related":"car",
        "name_brand":"Pars",
        "id_brand":"07"

    },
    {
        "category_related":"car",
        "name_brand":"Jian",
        "id_brand":"08"

    },
    {
        "category_related":"car",
        "name_brand":"samand",
        "id_brand":"09"

    },
    {
        "category_related":"car",
        "name_brand":"samand",
        "id_brand":"10"

    },
    {
        "category_related":"house",
        "name_brand":"apartment",
        "id_brand":"11"

    },
    {
        "category_related":"house",
        "name_brand":"villa",
        "id_brand":"12"

    },
    {
        "category_related":"house",
        "name_brand":"complex",
        "id_brand":"13"

    },
    {
        "category_related":"mobile",
        "name_brand":"LG",
        "id_brand":"14"

    },
    {
        "category_related":"mobile",
        "name_brand":"apple",
        "id_brand":"15"

    },
    {
        "category_related":"mobile",
        "name_brand":"sumsong",
        "id_brand":"16"
    },
    {
        "category_related":"computer",
        "name_brand":"dell",
        "id_brand":"17"
    },
    {
        "category_related":"computer",
        "name_brand":"hp",
        "id_brand":"18"
    },
    {
        "category_related":"computer",
        "name_brand":"msi",
        "id_brand":"19"
    },



]


export const getCity=()=>{
    return city
}
export const getAdvertiseCity=(city_name)=>{
    return adv_cities.filter (adv=> adv.city==city_name)
}

export const getOneAdvertisement=(id) =>{
    return adv_cities.find(adv=> adv.adv_id == id)
}

export const getAdvertiseCategory=(category_name,city_name )=>{
    return adv_cities.filter (adv=> adv.category==category_name && adv.city==city_name )
}
export const getBrands=()=>{
    return brand
}
export const getCategory=()=>{
    return category
}

export const getBooks=()=>{
    return books;
}
export const getBook=(id) =>{
    return books.find(book=> book.id == id)
}
export const deleteBook=(id)=>{
     books= books.filter(book=> book.id !== id)
    
}