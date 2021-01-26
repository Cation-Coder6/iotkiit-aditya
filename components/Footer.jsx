const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">

      <div className="bg-gray-100">
        <div className="container px-5 pb-6 sm:pt-4 pt-3 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-md text-gray-600 sm:ml-6 sm:mt-0 mt-4">© 2021 IOTLAB —
            <a href="https://twitter.com/iotlabkiit" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@iotlabkiit</a>
          </p>
          {/* <p className="text-sm text-gray-500 sm:ml-48 sm:mt-0 mt-4 justify-center sm:justify-start">
            Made with ❤ and ☕ by IoT Web Team
          </p> */}
          <p className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-md text-gray-600">
            Made with ❤ and ☕ by IoT Web Team
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer;