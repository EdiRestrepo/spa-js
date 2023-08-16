import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { PostCard } from "./components/PostCard.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
  const d = document,
        $root = d.getElementById("root");
    
    $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
  InfiniteScroll();
}

// export function App() {
//   document.getElementById("root").innerHTML = `<h1>Hola desde JS Vanilla</h1>`;
//   console.log(api);

//   ajax({
//     url: api.POSTS,
//     cbSuccess: (posts) => {
//       console.log(posts);
//     },
//   });

//   ajax({
//     url: api.CATEGORIES,
//     cbSuccess: (post) => {
//       console.log(post);
//     },
//   });
// }
