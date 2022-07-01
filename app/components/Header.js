const Header = () => {
  const $headerView = document.createElement("header");
  $headerView.innerHTML = `
    <nav class="header__nav">
        <div class="header__nav-logo">
            <p>F<span>🔥</span>s  lore</p>
        </div>
        <ul class="header__nav-ul">
            <li class="header__nav-ul-li"><a><i class='bx bx-info-circle infoModal'></i></a></li>
            <li class="header__nav-ul-li"><a><i class='bx bx-moon darkMode'></i><i class="bx bx-sun"></i></a></li>
        </ul>
    </nav>
    `;
    $headerView.classList.add("header")
  return $headerView;
};

export default Header;
