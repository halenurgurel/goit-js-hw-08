const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alphine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

//Galeri öğelerini işaretleme

const galleryList = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img class="gallery-image"
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}" />
        </a>
  </li>`
  )
  .join("");

//ürettiğimiz html'i ul içine ekleyeceğiz

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

//linke tıklayınca indirmenin sayfa yönlenmesinin engellenmesi

galleryList.addEventListener("click", (event) => {
  //sadece linke veya içindeki resme tıklandığında çalışacak
  const link = event.target.closest(".gallery-link");
  if (!link) return; //link yoksa çıkacağız

  event.preventDefault(); //Link yönlenmesini engelle
  const largeImageURL = link.querySelector("img").dataset.source; //data-source linkini alıyor

  //ilk parametre modalin içeriği, ikinci parametre modalın davranış ayarları,
  const instance = basicLightbox.create(
    `<img src="${largeImageURL}" width="800" height="600">`,
    {
      //modal açıldığında klaveyeyi dinlemeye başla
      onShow: (instance) => {
        document.addEventListener("keydown", onEscPress);
      }, //modal kapandığında klavyeyi dinlemeyi durdur
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscPress);
      },
    }
  );

  instance.show();

  function onEscPress(event) {
    if (event.key === "Escape") {
      //event.key basılan tuiun adını string olarak veriyor
      instance.close();
    }
  }
});
