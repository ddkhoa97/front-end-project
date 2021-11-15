import { React, useState } from "react";
import styles from "../components/styles/Footer.module.css";
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
export default function Footer() {
  const [FBhovered, setFBHovered] = useState(false);
  const FBtoggleHover = () => setFBHovered(!FBhovered);

  const [IGhovered, setIGHovered] = useState(false);
  const IGtoggleHover = () => setIGHovered(!IGhovered);

  const [TWhovered, setTWHovered] = useState(false);
  const TWtoggleHover = () => setTWHovered(!TWhovered);

  const [INhovered, setINHovered] = useState(false);
  const INtoggleHover = () => setINHovered(!INhovered);

  return (
    <div className={styles.WrappedStyled}>
      <div className={styles.WrappedStyled_container}>
        <div className={styles.Footer_row}>
          <img src="../images/wolt.png" height="61" width="110"></img>
        </div>
        <div className={styles.Footer_row}>
          <div className={styles.Footer_column}>
            <h3 className={styles.Footer_column_title}>
              <span data-localization-key="front-footer.downloads-list-title">
                Download the app
              </span>
            </h3>
            <img
              src="../images/applestorelogo.png"
              height="100"
              width="80%"
              style={{ marginBottom: "20px" }}
            ></img>
            <img src="../images/googlestore.png" height="100" width="80%"></img>
          </div>
          <div className={styles.Footer_column}>
            <h3 className={styles.Footer_column_title}>
              <span data-localization-key="front-footer.downloads-list-title">
                Let's do this together
              </span>
            </h3>
            <ol className={styles.Footer_column_Jobs}>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>For couriers</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>For restaurants</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>For stores</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>For companies</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>For Wolt Delivery</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>For Jobs</span>
                </a>
              </li>
            </ol>
          </div>
          <div className={styles.Footer_column}>
            <h3 className={styles.Footer_column_title}>
              <span data-localization-key="front-footer.downloads-list-title">
                Wolt links
              </span>
            </h3>
            <ol className={styles.Footer_column_Jobs}>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>Contact</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>Media</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>Support</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>Wolt blog</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>Security</span>
                </a>
              </li>
              <li className="Footer_column_Jobs">
                <a aria-label="Item 1 of 6 - For couriers" href="#">
                  <span>About us</span>
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.Footer_row}>
          <div style={{ width: "33.33%" }}>©️ Wolt 2014–2021</div>
          <ul className={styles.legalWrapper}>
            <li>
              <a href="#">
                <span>Accessibility statement</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Terms and conditions</span>
              </a>
            </li>
          </ul>
          <div className={styles.Social_media_logos}>
            <ol className={styles.Social_media_logos_row}>
              <li>
                <a
                  href="#"
                  onMouseEnter={FBtoggleHover}
                  onMouseLeave={FBtoggleHover}
                >
                  <FacebookOutlined
                    style={{ fontSize: "25px", color: "#3b5998" }}
                    spin={FBhovered}
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onMouseEnter={IGtoggleHover}
                  onMouseLeave={IGtoggleHover}
                >
                  <InstagramOutlined
                    style={{ fontSize: "25px", color: "#405DE6" }}
                    spin={IGhovered}
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onMouseEnter={TWtoggleHover}
                  onMouseLeave={TWtoggleHover}
                >
                  <TwitterOutlined
                    style={{ fontSize: "25px", color: "#1DA1F2" }}
                    spin={TWhovered}
                  />
                </a>
              </li>

              <li>
                {" "}
                <a
                  href="#"
                  onMouseEnter={INtoggleHover}
                  onMouseLeave={INtoggleHover}
                >
                  <LinkedinOutlined
                    style={{ fontSize: "25px", color: "#2867B2" }}
                    spin={INhovered}
                  />
                </a>{" "}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
