const siteMetadata = {
    title: `Mononoke Studio`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/Igor_Emotion 1 (512 x 512).png`,
    icon: `/images/Igor_Emotion 1 (512 x 512).png`,
    titleImage: `/images/m14_s8mwg1.webp`,
    ogImage: `/images/m14_s8mwg1.webp`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `WE ARE YOUR WEBFLOW DEVELOPMENT EXPERTS`,
    description: `Creating amazing websites built in Webflow to help startups and enterprises connect with their customers, increasing conversions and enable growth, since 2019.`,
    about:
        "We like to think we're an eternal scrappy startup. We know how many nights you've spent rehearsing your speech, or fighting with a tiny detail that probably no one is going to notice. We've been there, we know the struggle. We build products close to our hearts, and put everything we’ve got into them, so the final products we deliver speak for themselves. Our workflow is not standard, and neither are we -- nor the brands we help create.",
    author: `@_Igor`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/sretja",
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "#",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "#",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://submit-form.com/y298lXDP",
        description: `It makes us happy to meet new people! Let’s set up a (digital) meeting to talk about you. Please fill in the form below and we’ll be in touch.`,
        mail: "igor@mononoke.io",
        phone: "+385 99 365-3077",
        address: "Mihajla Pupina 4 \Varaždin \Croatia",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
