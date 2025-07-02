import Image from "next/image"

export const CircleFooter = () => {
    return (
        <div className="flex justify-center items-center">
            <Image
              src="/dark-circle.svg"
              alt="Dark Circle"
              width={128}
              height={128}
              className="object-contain"
            />
             <Image
              src="/pacman.svg"
              alt="Pacman"
              width={128}
              height={128}
              className=" object-contain"
            />
             <Image
              src="/dark-circle.svg"
              alt="Dark Circle"
              width={128}
              height={128}
              className=" object-contain"
            />
        </div>
    )
}