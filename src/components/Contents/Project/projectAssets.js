import bg_a from "../../../assets/bg/bg-a.jpg";
import bg_b from "../../../assets/bg/bg-b.jpg";
import bg_c from "../../../assets/bg/bg-c.jpg";

import p_a_image_a from "../../../assets/project-a/image-a.jpg";
import p_a_image_b from "../../../assets/project-a/image-b.jpg";
import p_b_image_a from "../../../assets/project-b/image-a.jpg";
import p_b_image_b from "../../../assets/project-b/image-b.jpg";
import p_c_image_a from "../../../assets/project-c/image-a.jpg";
import p_c_image_b from "../../../assets/project-c/image-b.jpg";

// bg cycles for infra projects (images will be replaced later)
export const PROJECT_ASSETS = {
  "dashboard-cms":          { bg: bg_a, imgA: p_a_image_a, imgB: p_a_image_b },
  "cms-api":                { bg: bg_b, imgA: p_b_image_a, imgB: p_b_image_b },
  "blogpage":               { bg: bg_c, imgA: p_c_image_a, imgB: p_c_image_b },
  "observability-platform": { bg: bg_a, imgA: null,        imgB: null        },
  "network-redesign":       { bg: bg_b, imgA: null,        imgB: null        },
  "security-architecture":  { bg: bg_c, imgA: null,        imgB: null        },
  "itsm-asset":             { bg: bg_a, imgA: null,        imgB: null        },
};
