import { BsBookmarkFill } from "react-icons/bs";

import keyword from "../../keyWord";

import { KeyWordWrap, KeyWordItems, Bookmark, Surface, SurfaceIcon } from "./KeyWordLayoutCSS";

const KeyWordLayout = () => {
  return (
    <KeyWordWrap>
      <KeyWordItems>
        <Bookmark>
          <BsBookmarkFill />
        </Bookmark>
        {keyword.map((keyword, i): any => (
          <Surface key={i}>
            {keyword.title}
            <SurfaceIcon>{keyword.icons}</SurfaceIcon>
          </Surface>
        ))}
      </KeyWordItems>
    </KeyWordWrap>
  );
};

export default KeyWordLayout;
