import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./componets/staylsass/Home.scss"
import "./componets/staylsass/About.scss"
import "./componets/staylsass/Layout.scss"
import "./componets/staylsass/Navbar.scss"
import "./componets/staylsass/Shops.scss"
import "./componets/staylsass/SingleProduct.scss"
import "./componets/staylsass/BoxText.scss"
import "./componets/staylsass/ProductComparison.scss"
import "./componets/staylsass/Card.scss"
import "./componets/staylsass/CheckOut.scss"
import "./componets/staylsass/Contact.scss"

createRoot(document.getElementById("root")).render(<App />);
<StrictMode>
    <App />
</StrictMode>