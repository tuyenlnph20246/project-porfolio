
import { render, router } from "@/lib";
import AccountAdminPage from "@/pages/admin/account/account";
import AccountAddPage from "@/pages/admin/account/add-account";
import NavAdminPage from "@/pages/admin/mainNav/nav";
import NavAdminAddPage from "@/pages/admin/mainNav/nav-add";
import NavAdminEditPage from "@/pages/admin/mainNav/nav-edit";
import MediaAddPage from "@/pages/admin/socialMedia/add-media";
import MediaEditPage from "@/pages/admin/socialMedia/edit-media";
import socialMedia from "@/pages/admin/socialMedia/socialMedia";
import Homepage from "@/pages/Homepage";
import notFount from "@/pages/notFount";
const app = document.querySelector("#app");

router.on("/", () => render(Homepage, app));
// ADMIN 
router.on("/admin", () => render(NavAdminPage, app));
router.on("/admin/navs/add", ()=>render(NavAdminAddPage, app));
router.on("/admin/navs/:id/edit", ({data})=>render(()=> NavAdminEditPage(data),app));
router.on("/admin/navs", () => render(NavAdminPage, app));
// ADMIN SOCIAL MEDIA
router.on("/admin/socialmedias", ()=>render(socialMedia, app));
router.on("/admin/socialmedias/:id/edit", ({data})=>render(()=>MediaEditPage(data),app));
router.on("/admin/socialmedias/add", ()=>render(MediaAddPage, app));
//ADMIN ACCOUNT
router.on("/admin/account", render(AccountAdminPage, app));
router.on("/admin/account/add", render(AccountAddPage, app));
router.notFound(() => render(notFount, app));
router.resolve();
