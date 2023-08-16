import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("main");
    
    let { hash } = location;

    console.log(hash);

    $main.innerHTML = null;

    if (!hash || hash === "#/") {
        // $main.innerHTML = "<h2>Sección del Home</h2>";
          await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
            //   console.log(posts);
              let html = "";
              posts.forEach((post) => (html += PostCard(post)));
              d.querySelector(".loader").style.display = "none";
              $main.innerHTML = html;
            },
          });

    } else if (hash.includes("#/search")) {
      // $main.innerHTML = "<h2>Sección del Buscador</h2>";
      let query = localStorage.getItem("wpSearch");

      if (!query) return false;

      await ajax({
        url: `${api.SEARCH}${query}`,
      });
      

    } else if (hash === "#/contacto") {

        $main.innerHTML = "<h2>Sección del Contacto</h2>";
        
    } else {
        
        // $main.innerHTML =
        //     "<h2>Aquí se cargara el contenido de el Post previamente seleccionado</h2>";

         await ajax({
           url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
           cbSuccess: (post) => {
             console.log(post);
             $main.innerHTML = Post(post);
           },
         });
        
        
    }

    d.querySelector(".loader").style.display = "none";

}
