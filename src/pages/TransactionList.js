import styles from './Home.module.css'

const TransactionList = ({documents}) => {
    console.log('transaction list')
    console.log(documents)
  return (
    <ul className={styles.transactions}>
    {documents.map((transaction) =>(
        <li key={transaction.id}>
        <p className={styles.name}>{transaction.name}</p>
        <p className={styles.amount}>${transaction.amount}</p>
        </li>
    ))}

    </ul>
  )
}

export default TransactionList