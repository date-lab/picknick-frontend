import { useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";

import keyword from "../../data";

import { KeyWordWrap, KeyWordItems, Bookmark, Surface, SurfaceIcon } from "./KeyWordLayoutCSS";

const KeyWordLayout = () => {
  return (
    <KeyWordWrap>
      <KeyWordItems>
        <Bookmark>
          <BsBookmarkFill />
        </Bookmark>
        {keyword.map((data, i): any => (
          <Surface key={i}>
            {data.title}
            <SurfaceIcon>{data.icons}</SurfaceIcon>
          </Surface>
        ))}
      </KeyWordItems>
    </KeyWordWrap>
  );
};

export default KeyWordLayout;
