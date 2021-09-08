import React from 'react'
import { HeaderProps } from './../interfaces'

const Header = ({ profileImage, heading, subheading }: HeaderProps) =>
    <div style={styles.main}>
        {profileImage && <img style={styles.img} src={profileImage} />}
        <span style={styles.text}>
            <p style={styles.heading}>{heading}</p>
            <p style={styles.subheading}>{subheading}</p>
        </span>
    </div>

const styles = {
    main: {
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        width: 36,
        height: 36,
        borderRadius: 40,
        marginRight: 12,
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
    },
    heading: {
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 1)',
        margin: 0,
        marginBottom: 3,
        fontFamily: 'Inter',
        fontWeight: 500,
    },
    subheading: {
        fontSize: '13px',
        color: '#7A7F9E',
        margin: 0,
        fontFamily: 'Inter',
        fontWeight: 500,
    }
}

export default Header
