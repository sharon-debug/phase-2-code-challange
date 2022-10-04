import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState ([]);
  const [search ,setSearch] = useState ("Chipotle")

  useEffect(()=>{
    fetch ("http://localhost:8001/transactions")
    .then ((r) => r.json())
    .then((transactions)=> {
      setTransactions(transactions);

    });

  },[])

  function handleAddTransaction (newTransaction){
    console.log(newTransaction);
    const updateTransactions = [...transactions, newTransaction];
    setTransactions(updateTransactions);
  }



  return (
    <div>
      <Search  search ={search} setSearch = {setSearch}/>
      <AddTransactionForm  onAddTransaction = {handleAddTransaction}/>
      <TransactionsList search ={search} transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;