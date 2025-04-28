const Status = ({ status }: { status: 'warning' | 'error' | 'none' }) => {
  if (status === 'warning') {
    return <div className="w-6 flex-none text-center mr-4 text-[#fabd2f] bg-[#3c3836]">𝚫</div>
  }

  if (status === 'error') {
    return <div className="w-6 flex-none text-center mr-4 text-[#fb4934] bg-[#3c3836]">✘</div>
  }

  if (status === 'none') {
    return <div className="w-6 flex-none text-center mr-4 bg-[#3c3836]" />
  }
}

export default Status