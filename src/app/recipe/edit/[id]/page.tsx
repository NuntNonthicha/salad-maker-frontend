import EditCartIngredients from "../../components/form/EditCartIngredients"

export default function EditRecipePage({
    params,
}: {
    params: { id: string }
}) {
    return (
        <div className='px-4 w-full flex flex-col pt-6 flex-grow pb-4 space-y-4'>
            <h1 className='heading-1'>Edit Recipe</h1>
            <div className='space-y-6 rounded-[16px] bg-white px-6 py-10'>
                <EditCartIngredients id={params.id} />
            </div>
        </div>
    )
}
