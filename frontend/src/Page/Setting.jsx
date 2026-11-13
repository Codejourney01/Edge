import React from 'react';

const inputClassName =
    'mt-2 h-9 w-full rounded-[5px] border border-[#E5E5E5] px-3 text-[13px] text-[#1E1E1E] placeholder:text-[12px] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 max-md:h-10 max-md:rounded-md md:px-4 md:text-[14px]';

export default function Setting() {
    return (
        <div
            id="Edgeprofile"
            className="w-full min-w-0 rounded-sm border border-[#E5E5E5] pb-[40px] md:min-h-dvh md:pb-12"
        >
            <div className="px-4 pb-5 pt-4 md:flex md:items-start md:gap-8 md:px-8 md:pb-8 md:pt-8 xl:gap-34">
                <div className="md:w-60 md:shrink-0">
                    <h3 className="text-[14px] font-semibold text-[#1E1E1E] md:text-[16px] md:leading-6">
                        My Profile
                    </h3>

                    <div className="hidden md:mt-6 md:block">
                        <h4 className="text-[14px] font-medium text-[#525252]">
                            Profile
                        </h4>
                        <p className="mt-3 text-[12px] font-medium text-[#525252]">
                            Your personal information and account security settings.
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-4 w-full min-w-0 max-w-[360px] md:mx-0 md:mt-12">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h4 className="text-[12px] font-medium text-[#525252]">
                            Avatar
                        </h4>

                        <div className="mt-2 flex size-14 items-center justify-center rounded-full bg-black md:mt-4 md:size-20">
                            <span className="text-[20px] text-white md:text-[26px]">
                                K
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-3 md:mt-5">
                        <div className="flex flex-col">
                            <label
                                htmlFor="profile-name"
                                className="text-[12px] font-medium text-[#1E1E1E]"
                            >
                                Name
                            </label>
                            <input
                                id="profile-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                defaultValue="Krish"
                                className={inputClassName}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="profile-email"
                                className="text-[12px] font-medium text-[#1E1E1E]"
                            >
                                Email
                            </label>
                            <input
                                id="profile-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                defaultValue="krishtest12@gmail.com"
                                className={inputClassName}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="profile-password"
                                className="text-[12px] font-medium text-[#1E1E1E]"
                            >
                                Password
                            </label>
                            <input
                                id="profile-password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Update password"
                                className={inputClassName}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto grid w-full max-w-[392px] grid-cols-2 gap-x-3 px-4 md:block md:max-w-none md:px-0">
                <div className="col-span-2 md:px-6">
                    <div className="w-full border-y border-[#E5E5E5] pb-5">
                        <div className="flex items-center max-md:justify-between max-md:gap-3 max-md:py-4 md:gap-42">
                            <div className="max-md:min-w-0 md:mt-5">
                                <h4 className="text-[13px] font-medium text-[#525252] md:text-[14px]">
                                    Theme color
                                </h4>
                                <p className="hidden text-[12px] font-normal text-[#525252] md:block">
                                    Choose a preferred theme for the app.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 max-md:shrink-0 md:mt-5 md:gap-5">
                                <div className="size-7 rounded-full bg-[#2563EB] md:size-10" />
                                <div className="size-7 rounded-full bg-[#777777] md:size-10" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-[#E5E5E5] pt-4 md:mt-5 md:flex-row md:items-center md:gap-42 md:border-t-0 md:pt-0">
                            <div className="md:mt-5 md:max-w-55">
                                <h4 className="text-[13px] font-medium text-[#525252] md:text-[14px]">
                                    Appearance
                                </h4>
                                <p className="hidden text-[12px] text-[#525252] md:block">
                                    Choose light or dark mode, or switch your mode automatically based on your system settings.
                                </p>
                            </div>

                            <div className="grid w-full grid-cols-2 gap-3 md:mt-5 md:flex md:w-auto md:items-center md:gap-5">
                                <div className="min-w-0">
                                    <div className="h-14 w-full rounded-[5px] border border-[#D4D4D4] bg-white md:h-20 md:w-40 md:border-black" />
                                    <h4 className="mt-2 text-[12px] font-semibold text-[#1E1E1E]">
                                        Light
                                    </h4>
                                </div>

                                <div className="min-w-0">
                                    <div className="h-14 w-full rounded-[5px] bg-[#222222] md:h-20 md:w-40" />
                                    <h4 className="mt-2 text-[12px] text-[#525252] md:text-[#A8A8A8]">
                                        Dark
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 min-w-0 md:mb-12 md:mt-5 md:flex md:items-center md:justify-between md:px-6">
                    <h3 className="hidden text-[14px] font-medium text-[#525252] md:block">
                        Log out
                    </h3>

                    <button
                        type="button"
                        className="w-full rounded-md bg-[#FF2C2C] px-2 py-2 text-[12px] text-white max-md:min-h-11 md:w-30 md:px-0 md:text-[14px]"
                    >
                        Log Out
                    </button>
                </div>

                <hr className="hidden md:block" />

                <div className="mt-4 min-w-0 md:mt-7 md:flex md:w-full md:justify-end md:px-6">
                    <button
                        type="button"
                        className="w-full rounded-md bg-[#2563EB] px-2 py-2 text-[12px] text-white max-md:min-h-11 md:w-30 md:px-0 md:text-[14px]"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}