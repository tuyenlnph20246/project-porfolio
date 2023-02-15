const sidebar = () => {
  return `
  <div class="flex-none w-1/5 bg-[#E9E8E8]">
      <div class="flex items-center gap-2 justify-center bg-[#E9E8E8] py-2">
          <div class="">
            <img class="rounded-full w-16" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
          </div>
          <div class="">
            <h3 class="font-semibold text-xl">Luu Ngoc Tuyen</h3>
            <div class="flex items-center gap-3 text-[#7B8FA1]">
              <p>Admin Page</p>
              <i class="fas fa-arrow-circle-down"></i>
            </div>
          </div>
      </div>
      <div class="text-center">
        <ul>
          <li class="py-2"><a class="hover:text-orange-500 text-xl" href="/admin/navs">Menu</a></li>
          <li class="py-2"><a class="hover:text-orange-500 text-xl" href="">Avatar</a></li>
          <li class="py-2"><a class="hover:text-orange-500 text-xl" href="">Contact</a></li>
        </ul>
      </div>
    </div>
    `;
};

export default sidebar;
