
import { render, router } from "@/lib";
import NavAdminPage from "@/pages/admin/mainNav/nav";
import NavAdminAddPage from "@/pages/admin/mainNav/nav-add";
import NavAdminEditPage from "@/pages/admin/mainNav/nav-edit";
import Homepage from "@/pages/Homepage";
import notFount from "@/pages/notFount";
const app = document.querySelector("#app");

router.on("/", () => render(Homepage, app));
// ADMIN 
router.on("/admin", () => render(NavAdminPage, app));
router.on("/admin/navs/add", ()=>render(NavAdminAddPage, app));
router.on("/admin/navs/:id/edit", ()=>render(NavAdminEditPage,app));
router.on("/admin/navs", () => render(NavAdminPage, app));

router.notFound(() => render(notFount, app));
router.resolve();
