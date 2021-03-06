import React from "react"
import HeaderTop from "../header/header.top"
import HeaderMiddle from "../header/header.middle"
import HeaderBottom from "../header/header.bottom"
import ContentHome from "./content.home"
import FooterTop from "../footer/footer.top"
import FooterMiddle from "../footer/footer.middle"
import FooterBottom from "../footer/footer.bottom"

const Home = ({
  islogin,
  logout,
  category,
  publisher,
  book,
  totalpage,
  backPage,
  nextPage,
  setPage,
  page,
  pageSize,
  setPageSize,
  sortType,
  setSortType,
  setRangeType,
  title,
  setTitle,
  setBranch,
  branch,
  setSearchText,
  author,
  setIDBranch,
  branchClick,
  history,
  searchTextSubmit,
  addToCart,
  text,
  cart,
  isActivatedShop
}) => (
  <div>
    <header id="header">
      <HeaderTop />
      <HeaderMiddle
        islogin={islogin}
        logout={() => logout()}
        history={history}
        cart={cart}
      />
      <HeaderBottom
        sortType={sortType}
        text={text}
        setSortType={value => setSortType(value)}
        setSearchText={value => setSearchText(value)}
        searchTextSubmit={() => searchTextSubmit()}
        isActivatedShop={isActivatedShop}
        history={history}
      />
    </header>
    <ContentHome
      category={category}
      publisher={publisher}
      book={book}
      totalpage={totalpage}
      backPage={() => backPage()}
      nextPage={() => nextPage()}
      setPage={page => setPage(page)}
      page={page}
      pageSize={pageSize}
      setPageSize={setPageSize}
      setRangeType={range => setRangeType(range)}
      title={title}
      setTitle={title => setTitle(title)}
      setBranch={branch => setBranch(branch)}
      searchTextSubmit={() => searchTextSubmit()}
      setSearchText={value => setSearchText(value)}
      branch={branch}
      author={author}
      setIDBranch={id => setIDBranch(id)}
      branchClick={(branch, id) => branchClick(branch, id)}
      addToCart={product => addToCart(product)}
    />
    <footer id="footer">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  </div>
)

export default Home
