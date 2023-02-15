import sidebar from "@/components/adminComponents/sidebar"
const NavAdminEditPage = () => {
  return (
    `
    <div class="container mx-auto w4/5 flex border">
      ${sidebar()}
      <div class="grow bg-red-500">NavContentEditPage</div>
    </div>
    `
  )
}

export default NavAdminEditPage