const Header = () => {
  const $headerView = document.createElement("header");
  $headerView.innerHTML = `
    <nav class="header__nav">
        <div class="header__nav-logo">
            <p>F<span>🔥</span>s  lore</p>
        </div>
        <ul class="header__nav-ul">
            <li class="header__nav-ul-li"><i class='bx bx-info-circle'></i></li>
            <li class="header__nav-ul-li"><i class='bx bx-moon'></i></li>
        </ul>
    </nav>
    `;
    $headerView.classList.add("header")
  return $headerView;
};

export default Header;
