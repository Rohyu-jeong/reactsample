import { CSSProperties } from "react";

export const Logo = () => {

    const logoBoxStyle: CSSProperties = {
        width: "200px",
        height: "100%",
        paddingLeft: "35px",
      };
    
      const logoStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      };
      
    return (
        <div style={logoBoxStyle}>
            <img style={logoStyle} src="/logo/logo.png" alt="logo" />
      </div>
    );
}

export default Logo;