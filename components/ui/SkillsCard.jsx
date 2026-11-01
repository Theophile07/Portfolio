export default function SkillsCard({ title, description, }) {
    return (
        <div className="mt-4">
            <h3 className="w-[184px] text-[#6366F1] mb-3 text-xl font-semibold">{title}</h3>
            <p className="text-base w-[196px] text-[#262B38]">{description}</p>
            <div className="mt-4 flex gap-2">
                
            </div>
        </div>
    )
}