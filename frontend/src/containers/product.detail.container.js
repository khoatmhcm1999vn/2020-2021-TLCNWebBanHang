import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ProductDetail from "../components/product.detail/product.detail"
import * as productActions from "../actions/product.action"
import * as homeActions from "../actions/home.action"
import * as userActions from "../actions/user.action"
import * as cartActions from "../actions/cart.action.js"
import Loading from "../components/loading/loading"

class ProductDetailContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { id } = this.props.match.params
    this.props.actions.loadUser()
    this.props.homeActions.getCategory()
    this.props.homeActions.getPublisher()
    this.props.productActions.getBookDetail(id)
    this.props.productActions.getBookRelated(id)
    this.props.productActions.getBookRelatedByRating(id)
    this.props.productActions.getCommentByIDBook(id)
    this.props.cartActions.getCart()
  }
  componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.mproductDetail !== null) {
      this.props.productActions.getNameCategoryByID(
        nextProps.mproductDetail.id_category
      )
      this.props.productActions.getNamePubliserByID(
        nextProps.mproductDetail.id_nsx
      )
      this.props.productActions.getNameAuthorByID(
        nextProps.mproductDetail.id_author
      )
    }
    if (nextProps.page !== this.props.page) {
      this.props.productActions.getCommentByIDBook(this.props.match.params.id)
    }
    if (nextProps.match.params.id !== this.props.match.params.id) {
      // console.log(nextProps.match.params.id);
      this.props.productActions.getBookDetail(nextProps.match.params.id)
      this.props.productActions.getBookRelated(nextProps.match.params.id)
      this.props.productActions.getBookRelatedByRating(
        nextProps.match.params.id
      )
      this.props.productActions.getCommentByIDBook(nextProps.match.params.id)
    }
  }

  render() {
    if (
      this.props.mproductDetail &&
      this.props.nameCategory &&
      this.props.namePublicsher &&
      this.props.nameAuthor
    ) {
      return (
        <div>
          <ProductDetail
            category={this.props.category}
            publisher={this.props.publisher}
            mproductDetail={this.props.mproductDetail}
            nameCategory={this.props.nameCategory}
            namePublicsher={this.props.namePublicsher}
            islogin={this.props.islogin}
            setSearchText={value => this.props.homeActions.setSearchText(value)}
            sortType={this.props.sortType}
            setSortType={value => this.props.homeActions.setSortType(value)}
            searchTextSubmit={() => this.props.homeActions.searchTextSubmit()}
            bookrelated={this.props.bookrelated}
            bookRelatedByRating={this.props.bookRelatedByRating}
            logout={() => this.props.actions.logout()}
            id_book={this.props.match.params.id}
            submitComment={(name, email, comment, ratingValue, id_book) =>
              this.props.productActions.submitComment(
                name,
                email,
                comment,
                ratingValue,
                id_book
              )
            }
            comment={this.props.comment}
            nameAuthor={this.props.nameAuthor}
            addToCart={product => this.props.productActions.addToCart(product)}
            totalpage={this.props.totalpage}
            page={this.props.page}
            backPage={() => this.props.productActions.backPage()}
            nextPage={() => this.props.productActions.nextPage()}
            setPage={page => this.props.productActions.setPage(page)}
            history={this.props.history}
            cart={this.props.cart}
          />
        </div>
      )
    } else {
      return <Loading />
    }
  }
}

const mapStateToProps = state => ({
  category: state.homeReducers.category.data,
  publisher: state.homeReducers.publisher.data,
  mproductDetail: state.productReducers.product.productDetail,
  nameCategory: state.productReducers.product.nameCategory,
  namePublicsher: state.productReducers.product.namePublicsher,
  nameAuthor: state.productReducers.product.nameAuthor,
  islogin: state.userReducers.user.islogin,
  bookrelated: state.productReducers.product.bookrelated,
  bookRelatedByRating: state.productReducers.product.bookRelatedByRating,
  comment: state.productReducers.product.comment,
  totalpage: state.productReducers.product.totalpage,
  page: state.productReducers.product.page,
  cart: state.cart.data
})
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
    homeActions: bindActionCreators(homeActions, dispatch),
    productActions: bindActionCreators(productActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer)
