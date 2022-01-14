import { Box, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="gray.700" mt="auto" py="1em" color="gray.300">
      <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
        <li>
          © 2020{" "}
          <a
            className="footer"
            href="https://daileykaze.ca"
            target="_blank"
            rel="noreferrer"
          >
            Dailey Kaze
          </a>
        </li>
        <li>
          <Link as={ReachLink} to="/terms-of-service">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link as={ReachLink} to="/private-policy">
            Private Policy
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default Footer;
