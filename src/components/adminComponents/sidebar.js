const sidebar = () => {
  return `
  <div class="flex-none w-1/6 border-r">
      <div class="flex items-center flex-col gap-2 justify-center py-2 h-[20vh]">
          <div class="">
            <img class="rounded-full w-16" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
          </div>
          <div class="">
            <h3 class="font-semibold text-xl">Luu Ngoc Tuyen</h3>
            <div class="flex items-center justify-center gap-3 text-[#7B8FA1]">
              <p>Admin Page</p>
              <i class="fas fa-arrow-circle-down"></i>
            </div>
          </div>
      </div>
      <div class="text-center">
        <ul>
          <li class="hover:text-white transition my-2 font-medium py-2 rounded-2xl hover:bg-gradient-to-l hover:from-blue-300 hover:to-blue-500 px-3">
            <i class="fas fa-caret-down text-xl text-[#DDDDDD] mr-3"></i>
            <a class="text-xl" href="/admin/navs">Menu</a>
          </li>
          <li class="hover:text-white transition my-2 font-medium py-2 rounded-2xl hover:bg-gradient-to-l hover:from-blue-300 hover:to-blue-500 px-3">
            <i class="fas fa-user text-xl text-[#DDDDDD] mr-3"></i>
            <a class="text-xl" href="/admin/account">Account</a>
          </li>
          <li class="hover:text-white transition my-2 font-medium py-2 rounded-2xl hover: hover:bg-gradient-to-l hover:from-blue-300 hover:to-blue-500 px-3">
            <i class="fas fa-comment-alt text-xl text-[#DDDDDD] mr-3"></i>
            <a class="text-xl" href="/admin/socialmedias">Social Media</a>
          </li>
        </ul>
      </div>
    </div>
    `;
};

export default sidebar;
