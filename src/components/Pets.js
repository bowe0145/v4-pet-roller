import { useEffect, useState } from 'react'
import { PetEgg } from './PetEgg'
import { PetList } from './PetList'

const SortByRarity = (a, b) => {
  // Sort by rarity first
  // If it's a tie then sort by name
  if (a.rarity === b.rarity) {
    return a.name > b.name ? 1 : -1
  }
  if (a.rarity === 'Legendary') {
    return -1
  } else if (b.rarity === 'Legendary') {
    return 1
  } else if (a.rarity === 'Epic') {
    return -1
  } else if (b.rarity === 'Epic') {
    return 1
  } else if (a.rarity === 'Rare') {
    return -1
  } else if (b.rarity === 'Rare') {
    return 1
  } else if (a.rarity === 'Fine') {
    return -1
  } else if (b.rarity === 'Fine') {
    return 1
  } else if (a.rarity === 'Normal') {
    return -1
  } else if (b.rarity === 'Normal') {
    return 1
  }
}

function InventoryBoxBody({ name, count }) {
  return (
    <>
      <p className="text-center">{name}</p>
      <p className="text-center">{count}</p>
    </>
  )
}

function InventoryBox({ name, count, onClick, rarity }) {
  // Style with tailwindcss

  const normalRarity = 'border w-40 h-40 bg-gray-300'
  const fineRarity = 'border w-40 h-40 bg-green-300'
  const rareRarity = 'border w-40 h-40 bg-blue-300'
  const epicRarity = 'border w-40 h-40 bg-purple-300'
  const legendaryRarity = 'border w-40 h-40 bg-orange-300'

  if (rarity === 'Normal') {
    return (
      <div className="flex flex-row items-center justify-between">
        <div className={normalRarity}>
          <InventoryBoxBody name={name} count={count} />
        </div>
      </div>
    )
  } else if (rarity === 'Fine') {
    return (
      <div className="flex flex-row items-center justify-between">
        <div className={fineRarity}>
          <InventoryBoxBody name={name} count={count} />
        </div>
      </div>
    )
  } else if (rarity === 'Rare') {
    return (
      <div className="flex flex-row items-center justify-between">
        <div className={rareRarity}>
          <InventoryBoxBody name={name} count={count} />
        </div>
      </div>
    )
  } else if (rarity === 'Epic') {
    return (
      <div className="flex flex-row items-center justify-between">
        <div className={epicRarity}>
          <InventoryBoxBody name={name} count={count} />
        </div>
      </div>
    )
  } else if (rarity === 'Legendary') {
    return (
      <div className="flex flex-row items-center justify-between">
        <div className={legendaryRarity}>
          <InventoryBoxBody name={name} count={count} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-row items-center justify-between p-2">
      <div className="border w-40 h-40 bg-red-300">
        <p>{name}</p>
        <p>{count}</p>
        <p>{rarity}</p>
      </div>
    </div>
  )
}

function Inventory({ list = [], onClick }) {
  return (
    <div className="flex flex-row flex-wrap mx-auto w-full gap-2 justify-center">
      {list && list.length > 0
        ? list.map((i, idx) => (
            <InventoryBox
              key={idx.toString()}
              name={i.name}
              count={i.count}
              onClick={onClick}
              rarity={i.rarity}
            />
          ))
        : null}
    </div>
  )
}

function Pets() {
  // [{ name: '', count: 0, rarity: '' }]
  const [petInventory, setPetInventory] = useState([])
  // [{ name: '', count: 0, rarity: '' }]
  const [selectedInventory, setSelectedInventory] = useState([])
  const [count, setCount] = useState(0)

  const openPetEgg = pet => {
    const isMultiplePets = Array.isArray(pet)
    console.log(`ismultiplepets: ${isMultiplePets}`)
    if (isMultiplePets) {
      setCount(count + pet.length)
      let newPetInventory = [...petInventory]
      // Loop through each one
      pet.forEach(p => {
        // Find the pet in the inventory
        const petInInventory = newPetInventory.find(i => i.name === p.name)
        console.log(`petInInventory:`, petInInventory)
        // If it's not in the inventory, add it
        if (!petInInventory) {
          newPetInventory.push({ ...p, count: 1 })
        } else {
          // Otherwise, just increment the count
          newPetInventory = newPetInventory.map(i =>
            i.name === p.name ? { ...i, count: i.count + 1 } : i
          )
        }
      })
      newPetInventory.sort(SortByRarity)
      setPetInventory(newPetInventory)
    } else {
      setCount(count + 1)
      // Add the pet to the inventory
      let petInsidePetInventory = petInventory.find(i => i.name === pet.name)

      if (petInsidePetInventory) {
        console.log(`found pet inside`, petInsidePetInventory)
        // Increase the count of the pet
        petInsidePetInventory.count++
        // Update the pet inside the inventory with the new count
        const newInventory = petInventory.map(i => {
          if (i.name === petInsidePetInventory.name) {
            i.count += 1
          }
          return i
        })
        newInventory.sort(SortByRarity)
        setPetInventory(newInventory)
      } else {
        // Add the pet to the inventory
        petInsidePetInventory = {
          name: pet.name,
          count: 1,
          rarity: pet.rarity
        }
        const newInventory = [...petInventory, petInsidePetInventory]
        newInventory.sort(SortByRarity)
        setPetInventory(newInventory)
      }
    }
  }

  return (
    <div>
      <h1>Pets opened: {count}</h1>
      <div className="m-2">
        <h2>Boxes</h2>
        <div className="flex gap-2 justify-center">
          <PetEgg onOpen={openPetEgg} tier={1} amount={10} />
          <PetEgg onOpen={openPetEgg} tier={1} amount={1} />
        </div>
      </div>
      <Inventory list={petInventory} />
    </div>
  )
}

export default Pets
