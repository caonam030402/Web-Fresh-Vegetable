type PurchaseStatus = -1 | 1 | 2 | 3 | 4 | 5

type PurchaseListStatus = PurchaseStatus | 0

interface Purchase {
  _id: string
  buy_count: number
  price: number
  price_before_discount: number
  status: PurchaseStatus
  user: string
  product: Product
  createdAt: string
  updatedAt: string
}

interface ExtendedPurchase extends Purchase {
  disabled: boolean
  checked: boolean
}
