export default function Tooltip({ message, children }) {
    return (
    <div class="group relative flex">
        {children}
        <p class="absolute h-full text-center scale-0 transition-all rounded-9xl bg-green-100 p-3 text-xl text-gray-900 group-hover:scale-100">{message}</p>
    </div>
    )
}