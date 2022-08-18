var mobilephones = {
    apple: {
        iphone6: {
            name: "Iphone 6",
            brand: "Apple",
            colors: "Red",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-1.jpg",
            isPta: false,
        },
        iphone6s: {
            name: "Iphone 6s",
            brand: "Apple",
            colors: "White",
            image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg",
            isPta: false,
        },
        iphone6plus: {
            name: "Iphone 6 plus",
            brand: "Apple",
            colors: "gray",
            image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-plus2.jpg",
            isPta: false,
        },
        iphone11: {
            name: "Iphone 11 Pro",
            brand: "Apple",
            colors: "Black",
            image: "https://m.media-amazon.com/images/I/41pIi9xgSZL._AC_SY780_.jpg",
            isPta: false,
        },
    },
    samsung: {
        m13: {
            name: "Samsung Galaxy M13",
            brand: "Samsung",
            colors: "White",
            image:
                "https://files.gsmchoice.com/phones/samsung-galaxy-m13-india/samsung-galaxy-m13-india-big.jpg",
            isPta: true,
        },
        a13: {
            name: "Samsung Galaxy A13)",
            brand: "Samsung",
            colors: "Black",
            image:
                "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501378_sd.jpg",
            isPta: true,
        },
},
vivo: {
    y21: {
        name: "Vivo Y21",
        brand: "Vivo",
        colors: "Black",
        image:
            "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1633091381990/0b694c04dfbbe52ed1b964c754af8e5b.png",
        isPta: true,
    },
    v23: {
        name: "Vivo V23",
        brand: "Vivo",
        colors: "White",
        image:
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-pro.jpg",
        isPta: true,
    },
},
realme: {
    c35: {
        name: "Realme C35",
        brand: "Realme",
        colors: ["BlaCk", "white"],
        image:
            "https://fdn2.mobgsm.com/vv/pics/realme/realme-c35-2.jpg",
        isPta: true,
    },
    pro9: {
        name: "Realme 9 Pro",
        brand: "Realme",
        colors: "Full-green",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7vPs0RY9qsHLm51nf9a-bMevj2bz9SvBQqvVR-rFanUFJetojReaX5X1RYBeuSMr0II&usqp=CAU",
        isPta: true,
    },
    gt2: {
        name: "Realme GT2 ",
        brand: "Realme",
        colors: "Blue",
        image:
            "https://m-cdn.phonearena.com/images/phones/83259-350/realme-GT-2.jpg",
        isPta: true,
    },
},
oppo: {
    reno8: {
        name: "Oppo Reno8",
        brand: "Oppo",
        colors: "Golden",
        image:
            "https://latestmobilefaq.com/wp-content/uploads/2022/05/Oppo-Reno-8-Pro-FAQs.jpg",
        isPta: true,
    },
    reno8pro: {
        name: "Oppo Reno8 Pro",
        brand: "Oppo",
        colors: "BlaCk",
        image:
            "https://pricespakistan.pk/wp-content/uploads/2022/07/OPPO-Reno8-Pro-Plus.png",
        isPta: true,
    },
    a3s: {
        name: "Oppo A3s",
        brand: "Oppo",
        colors: "Red",
        image:
            "https://tring.pk/wp-content/uploads/2019/09/oppo-a3s-dual-sim-td-lte-in-id-th-pk-np-sg-version-3-16gb-cph1803-bbk-ax5b_5d8921e809a4d.jpeg",
        isPta: true,
    },
},
infinix: {
    note12pro: {
        name: "Infinix Note 12 Pro 5G",
        brand: "Infinix",
        colors: "Black",
        image:
            "https://i0.wp.com/technewsspace.com/wp-content/uploads/2022/07/1658211542_694_At-the-start-of-global-sales-of-the-Infinix-NOTE.jpg?resize=750%2C602&ssl=1",
        isPta: true,
    },
    hot12play: {
        name: "Infinix Hot 12 Play",
        brand: "Infinix",
        colors: "Gray",
        image:
            "https://images.priceoye.pk/infinix-hot-12-play-pakistan-priceoye-1sinx.jpg",
        isPta: true,
    },
    hot12: {
        name: "Infinix Hot 12",
        brand: "Infinix",
        colors: "Blue",
        image:
            "http://www.eezepc.com/wp-content/uploads/2022/07/infinix1-EEZEPC-3.png",
        isPta: true,
    },
}
}

var parent = document.getElementById("mob");
for(key in mobilephones){
    console.log(key)
    for(key1 in mobilephones[key]){
        console.log(mobilephones[key][key1].name)
        console.log(mobilephones[key][key1].brand)
        console.log(mobilephones[key][key1].colors)
        console.log(mobilephones[key][key1].image)
        console.log(mobilephones[key][key1].isPta)
        var card = `<div class="card" style="width: 18rem;">
        <img src=${mobilephones[key][key1].image} class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="card-title">Name: ${mobilephones[key][key1].name}</h6>
          <h6 class="card-text">Brand: ${mobilephones[key][key1].brand}</h6>
          <h6 class="card-text">Color: ${mobilephones[key][key1].colors}</h6>
          <h6 class="card-text">Pta: ${mobilephones[key][key1].isPta}</h6>
        </div>
      </div>`
      parent.innerHTML += card
    }
}

function search(){
    var drop = document.getElementById("dropdown").value;
    var input = document.getElementById("input").value.toLowerCase();
    var card = `<div class="card" style="width: 18rem;">
        <img src=${mobilephones[drop][input].image} class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="card-title">Name: ${mobilephones[drop][input].name}</h6>
          <h6 class="card-text">Brand: ${mobilephones[drop][input].brand}</h6>
          <h6 class="card-text">Color: ${mobilephones[drop][input].colors}</h6>
          <h6 class="card-text">Pta: ${mobilephones[drop][input].isPta}</h6>
        </div>
      </div>`
      var parent = document.getElementById("mob");
      parent.innerHTML = card
}