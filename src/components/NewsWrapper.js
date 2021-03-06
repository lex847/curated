import React from "react";
import News from "./News";
import uuid from "uuid/v4";

const NewsWrapper = ({ news, bookmarked, onBookmarkToggle }) => {
    return (
        <div className="news-container">
            {news && news.length > 0 ? (
                news.map(_news => {
                    return (
                        <News
                            news={_news}
                            key={uuid()}
                            onBookmarkToggle={onBookmarkToggle}
                            bookmarked={bookmarked}
                        />
                    );
                })
            ) : (
                <div className="warn">{"There seems to be no news!"}</div>
            )}
        </div>
    );
};

export default NewsWrapper;
