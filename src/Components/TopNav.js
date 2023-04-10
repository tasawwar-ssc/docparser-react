const TopNav = (props) => {
  return (
    <nav style={{zIndex: 'auto'}} className="navbar navbar-fixed-top navbar-expand-md fixed-top">
      <div id="loader_img"></div>

      <div className="navbar-nav mx-auto pe-2 w-50"></div>

      <div className="navbar-nav">
        <div id="quota_info_top" className="mt-3">
          <a
            href="/myaccount/subscription"
            id="quota-wrapper-top"
            className="pull-right tooltip_trigger confirm_save"
            data-placement="bottom"
            title="Next refill scheduled in 4 Weeks, 1 Day, 1 Hour, 42 Minutes"
          >
            <div className="progress quota-easy ">
              <div className="progress-text">0/250 Credits Used</div>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{marginRidth: '0'}}
              ></div>
            </div>
          </a>
        </div>

        <div className="nav-collapse collapse pull-right navbar-collapse">
          <ul
            className="navbar-nav nav_top"
            id="nav_top_main"
            role="navigation"
          >
            
            <li className="nav-item dropdown">
              <a
                role="menuitem"
                href="#"
                className="dropdown-toggle  nav-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span
                  className="tooltip_trigger_bottom"
                  title=""
                  data-bs-tooltip="tooltip"
                  data-bs-placement="bottom"
                  data-bs-original-title="Review your account setup"
                >
                  My Account
                </span>
              </a>
              <ul className="dropdown-menu pull-right">
                <li>
                  <a
                    href="http://localhost:9300/admin/users"
                    className="confirm_save"
                    role="menuitem"
                  >
                    <i
                      role="presentation"
                      style={{marginRight: '11px'}}
                      className="fal fa-fw fa-magic"
                    ></i>
                    Admin
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a
                    role="menuitem"
                    href="/myaccount/subscription"
                    className="confirm_save"
                  >
                    <i
                      role="presentation"
                      style={{marginRight: '11px'}}
                      className="fal fa-fw fa-credit-card"
                    ></i>
                    Subscription
                  </a>
                </li>
                <li>
                  <a
                    role="menuitem"
                    href="/myaccount/addons"
                    className="confirm_save"
                  >
                    <i
                      role="presentation"
                      style={{marginRight: '11px'}}
                      className="fal fa-fw fa-bolt"
                    ></i>
                    Add-ons
                  </a>
                </li>
                <li>
                  <a
                    role="menuitem"
                    href="/myaccount/api"
                    className="confirm_save"
                  >
                    <i
                      role="presentation"
                      style={{marginRight: '11px'}}
                      className="fal fa-fw fa-code"
                    ></i>
                    API
                  </a>
                </li>
                <li>
                  <a
                    role="menuitem"
                    href="/myaccount/credentials"
                    className="confirm_save"
                  >
                    <i
                      role="presentation"
                      style={{marginRight: '11px'}}
                      className="fal fa-fw fa-user"
                    ></i>
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    role="menuitem"
                    href="/myaccount/affiliate"
                    className="confirm_save"
                  >
                    <i
                      role="presentation"
                      className="fal fa-usd-circle fa-fw"
                    ></i>
                    Affiliates
                  </a>
                </li>

                <li className="divider"></li>
                <li>
                  <a
                    role="menuitem"
                    href="/partner/accounts"
                    className="confirm_save"
                  >
                    <i
                      role="presentation"
                      style={{marginRight: '11px'}}
                      className="fal fa-fw fa-users"
                    ></i>
                    Managed Accounts
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a
                    role="menuitem"
                    id="navigation_link_help"
                    href="/myaccount/resources"
                  >
                    <i
                      role="presentation"
                      style={{marginRight: '11px'}}
                      className="fal fa-fw fa-life-ring"
                    ></i>
                    Help
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a
                    role="menuitem"
                    href="http://localhost:9300/account/logout"
                    className="confirm_save"
                  >
                    <i
                      role="presentation"
                      style={{marginRight: '11px'}}
                      className="fal fa-fw fa-sign-out"
                    ></i>
                    Log-Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-nav-control">
        <ul className="nav nav_top">
          <li>
            <a
              role="menuitem"
              href="#"
              className="dropdown-toggle tooltip_trigger_bottom"
              title=""
              aria-label="Mobile menu"
              alt="Mobile menu"
              data-bs-tooltip="tooltip"
              data-bs-placement="bottom"
              data-bs-original-title="Mobile menu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i role="presentation" className="fa fa-bars"></i>
            </a>
            <div className="dropdown-menu" id="mobile-menu-container">
              <div className="dropdown-background"></div>
              <ul className="px-0">
                <li>
                  <a
                    id="beamer_icon_mobile"
                    className=" beamer_beamerSelector"
                    data-beamer-keypress="true"
                  >
                    <i
                      title=""
                      aria-label="Check out recent broadcasts about new changes to Docparser"
                      alt="Check out recent broadcasts about new changes to Docparser"
                      role="img"
                      className="tooltip_trigger_bottom fa fa-fw fa-lg fa-bell"
                      data-bs-tooltip="tooltip"
                      data-bs-placement="bottom"
                      data-bs-original-title="Check out recent broadcasts about new changes to Docparser"
                    ></i>
                    Notifications
                    <div
                      className="beamer_icon noBouncy"
                      style={{backgroundRolor: 'rgb(255, 90, 95)'}}
                      data-beamer-keypress="true"
                    >
                      1
                    </div>
                  </a>
                </li>
                <li className=" active">
                  <a
                    role="button"
                    href="/stack/main/table"
                    data-placement="bottom"
                    title="Home"
                    aria-label="Home"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    role="presentation"
                    href="#"
                    className="tooltip_trigger_bottom"
                    title=""
                    aria-label="Review your account setup"
                    alt="Review your account setup"
                    data-bs-tooltip="tooltip"
                    data-bs-placement="bottom"
                    data-bs-original-title="Review your account setup"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Account
                  </a>
                  <ul className="px-0">
                    <li>
                      <a
                        href="http://localhost:9300/admin/users"
                        className="confirm_save"
                        role="menuitem"
                      >
                        <i
                          role="presentation"
                          className="fal fa-fw fa-magic"
                        ></i>
                        Admin
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li className="">
                      <a role="menuitem" href="/myaccount/subscription">
                        <i
                          role="presentation"
                          className="fal fa-fw fa-credit-card"
                        ></i>
                        Subscription
                      </a>
                    </li>
                    <li className="">
                      <a role="menuitem" href="/myaccount/addons">
                        <i
                          role="presentation"
                          className="fal fa-fw fa-bolt"
                        ></i>
                        Add-ons
                      </a>
                    </li>
                    <li className="">
                      <a role="menuitem" href="/myaccount/api">
                        <i
                          role="presentation"
                          className="fal fa-fw fa-code"
                        ></i>
                        API
                      </a>
                    </li>
                    <li className="">
                      <a role="menuitem" href="/myaccount/credentials">
                        <i
                          role="presentation"
                          className="fal fa-fw fa-user"
                        ></i>
                        Account
                      </a>
                    </li>

                    <li className="divider"></li>
                    <li className="">
                      <a
                        role="menuitem"
                        href="/partner/accounts"
                        className="confirm_save"
                      >
                        <i
                          role="presentation"
                          className="fal fa-fw fa-users"
                          aria-hidden="true"
                        ></i>
                        Managed Accounts
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li className="">
                      <a
                        role="menuitem"
                        id="navigation_link_help"
                        href="/myaccount/resources"
                      >
                        <i
                          role="presentation"
                          className="fal fa-fw fa-life-ring"
                          aria-hidden="true"
                        ></i>
                        Help
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a
                        role="menuitem"
                        href="http://localhost:9300/account/logout"
                        className="confirm_save"
                      >
                        <i
                          role="presentation"
                          className="fal fa-fw fa-sign-out"
                          aria-hidden="true"
                        ></i>
                        Log-Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="clearfix"></div>
    </nav>
  );
};

export default TopNav
