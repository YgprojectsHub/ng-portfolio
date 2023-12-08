const getSkillData = (logo, percentValue, skillName, isActive, bgColor) => {
    return skillData = {
        skillName: skillName,
        logo: logo,
        percentValue: percentValue,
        percent: percentValue+"%",
        bgColor: "#"+bgColor,
        isActive: isActive
    }
}

const getLinkData = (linkName, logo, toLink, desc, isActive) => {
    return linkData = {
        linkName: linkName,
        logo: logo,
        toLink: toLink,
        desc: desc,
        isActive: isActive
    }
}

const getOtherSkills = (skillName, logo, isActive) => {
    return linkData = {
        skillName: skillName,
        logo: logo,
        isActive: isActive
    }
}

const getContact = (email) => {
    return linkData = {
        email: email,
        isActive: isActive
    }
}

module.exports = {getSkillData:getSkillData, getLinkData:getLinkData, getOtherSkills:getOtherSkills, getContact:getContact}