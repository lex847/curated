import React from "react";
import News from "./News";
import uuid from "uuid/v4";

const NewsWrapper = ({ news }) => {
    return (
        <div className="news-container">
            {news.news && news.news.length > 0 ? (
                news.news.map(_news => {
                    return <News news={_news} key={uuid()} />;
                })
            ) : (
                <div className="warn">There's no new news!</div>
            )}
        </div>
    );
};

export default NewsWrapper;