import React from 'react';
import { Story } from '../../interfaces';
import Header from "./../../components/Header";

const withHeader: React.FC<{ story: Story, globalHeader: Function }> = ({ story, globalHeader, children }) => {
    return <>
        {children}
        {story.header && (
            <div style={{ position: "absolute", left: 16, top: 28, zIndex: 19 }}>
                {typeof story === "object" ? (
                    globalHeader ? (
                        globalHeader(story.header)
                    ) : (
                            <Header
                                heading={story.header.heading}
                                subheading={story.header.subheading}
                                profileImage={story.header.profileImage}
                            />
                        )
                ) : null}
            </div>
        )}
    </>
}

export default withHeader;