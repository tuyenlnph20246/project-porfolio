import sidebar from "@/components/adminComponents/sidebar"
const NavAdminAddPage = () => {
  return (
    `
    <div class="container mx-auto w4/5 flex border">
      ${sidebar()}
      <div class="grow bg-red-500">NavContentAddPage</div>
    </div>
    `
  )
}

export default NavAdminAddPage