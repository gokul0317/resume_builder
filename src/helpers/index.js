const navigateTo = (props, url) => {
    props.push(url)
}

const validResume = (resume) => {
  return resume && Object.keys(resume).length ? true : false
}

export {
  navigateTo,
  validResume
}